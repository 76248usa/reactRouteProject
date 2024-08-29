import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Back to Home</button>
      <Outlet />
    </>
  );
};

export default Contact;
