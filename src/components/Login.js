import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file for styling

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        login
      );
      if (response.data) {
        alert(response.data.message);
        if(response.data.roles === "Admin"){
          navigate("/dataUser");
        }else{
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label className="login-label">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
            className="login-input"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            className="login-input"
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
