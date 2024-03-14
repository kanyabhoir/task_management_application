import React, { useState, useEffect } from "react";
import LoginPage from "../userAuthentication/LoginPage";
import RegistrationPage from "../userAuthentication/RegistrationPage";
import TaskManagement from "./TaskManagement";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const loggedInState = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInState === "true");
  }, []);

  const handleRegister = (firstName, lastName, email, password) => {
    console.log("Registration data:", { firstName, lastName, email, password });
    setIsRegistered(true);
  };

  const handleLogin = (username, password) => {
    console.log("Login data:", { username, password });
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const navigateToLogin = () => {
    setIsRegistered(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <TaskManagement handleLogout={handleLogout} />
      ) : isRegistered ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <div>
          <RegistrationPage
            handleRegister={handleRegister}
            navigateToLogin={navigateToLogin}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
