import React from "react";
import Header from "../components/Header";
import Todo from "../components/Todo";

function TaskManagement({handleLogout}) {
  return (
    <div>
      <Header />
      <Todo handleLogout={handleLogout} />
    </div>
  );
}

export default TaskManagement;
