import React, { useState } from "react";
import Select from "react-select";
function TaskForm({
  addTask,
  newTaskTitle,
  setNewTaskTitle,
  newTaskDescription,
  setNewTaskDescription,
  priority,
  setPriority,
  priorityOptions,
  errors,
}) {
  return (
    <div className="task-form">
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        {errors.description && (
          <span style={{ color: "red" }}>{errors.description}</span>
        )}
      </div>
      <div>
        <Select
          id="priority"
          value={priority}
          onChange={(selectedOption) => setPriority(selectedOption)}
          options={priorityOptions}
           placeholder="Select priority level..."
          required
        />
        <p>Selected Priority: {priority.label}</p>
      </div>
      <button onClick={addTask} className="add">Add Task</button>
    </div>
  );
}

export default TaskForm;

