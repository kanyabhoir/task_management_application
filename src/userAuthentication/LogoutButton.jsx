import React from 'react';

function LogoutButton({ handleLogout }) {

  return (
    <div className="logout-button">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutButton;