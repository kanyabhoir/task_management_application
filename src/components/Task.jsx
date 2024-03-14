import React, { useState } from "react";
import Draggable from "react-draggable";

function Task({ id, title, description, status, onComplete,priority }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className="task-card"
      //  onClick={() => showDetails(id)}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>
        <button onClick={toggleExpansion}>
          {isExpanded ? "Close" : "View"}
        </button>
      </div>
      {isExpanded && (
        <div>
          <p>{description}</p>
          <span>Status: {status}</span>
          <span>Priority: {priority}</span>
          {status === "To Do" && (
            <button onClick={() => onComplete(id)}>Complete</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Task;
