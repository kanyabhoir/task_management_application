import React, { useState } from "react";
import "../App.css";
import Task from "./Task";
import TaskFilters from "./TaskFilters";
import TaskForm from "./TaskForm";
import LogoutButton from "../userAuthentication/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import { addTask, markTaskAsDone } from "../../redux/slices/tasksSlice";
import SearchBar from "./SearchBar";

function Todo({ handleLogout }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [filter, setFilter] = useState("All");
  const [errors, setErrors] = useState({});
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priority, setPriority] = useState({
    value: "Medium",
    label: "Medium",
  });

  const handleAddTask = () => {
    const errors = {};
    if (!newTaskTitle.trim()) {
      errors.title = "Title is required!";
    }
    if (!newTaskDescription.trim()) {
      errors.description = "Description is required!";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    dispatch(
      addTask({
        id: tasks.length + 1,
        title: newTaskTitle,
        description: newTaskDescription,
        status: "To Do",
        priority: priority.value,
      })
    );
    setNewTaskTitle("");
    setNewTaskDescription("");
    setPriority({ value: "Medium", label: "Medium" });
    setErrors({});
  };

  const priorityOptions = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];
  const filterTasks = (status) => {
    setFilter(status);
    setExpandedTaskId(null);
    setPriorityFilter(null);
  };

  const filterTasksByPriority = (priority) => {
    return tasks.filter((task) => task.priority === priority);
  };

  const handleMarkTaskAsDone = (id) => {
    dispatch(markTaskAsDone(id));
  };

  const toggleTaskDetails = (taskId) => {
    setExpandedTaskId(taskId === expandedTaskId ? null : taskId);
  };

  let filteredTasks = tasks;

  if (filter !== "All") {
    filteredTasks = tasks.filter((task) => task.status === filter);
  }

  if (searchQuery) {
    filteredTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return (
    <div className="app">
      <TaskForm
        addTask={handleAddTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskDescription={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
        priority={priority}
        errors={errors}
        setPriority={setPriority}
        priorityOptions={priorityOptions}
      />
      <TaskFilters filterTasks={filterTasks} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="tasks">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onComplete={() => handleMarkTaskAsDone(task.id)}
            showDetails={toggleTaskDetails}
            isExpanded={task.id === expandedTaskId}
            priority={task.priority}
          />
        ))}
      </div>
      <LogoutButton handleLogout={handleLogout} />
    </div>
  );
}

export default Todo;
