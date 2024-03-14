import React from "react";

function TaskFilters({ filterTasks }) {
  return (
    <div className="filters">
      <div className="button-group"> 
        <button onClick={() => filterTasks("All")}>All</button>
        <button onClick={() => filterTasks("To Do")}>To Do</button>
      </div>
      <div className="button-group">
        <button onClick={() => filterTasks("In Progress")}>In Progress</button>
        <button onClick={() => filterTasks("Done")}>Done</button>
      </div>
    </div>
  );
}

export default TaskFilters;
