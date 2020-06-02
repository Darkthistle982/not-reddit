import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div className="placeholder">
        <img
          src="https://i.imgur.com/iZShFMQ.png"
          alt="background"
          className="logowithoutE"
        />
        <img
          src="https://i.imgur.com/rXhA7FC.png"
          alt="background"
          className="logoshadow"
        />
        <img
          src="https://i.imgur.com/g9FX4yY.png"
          alt="background"
          className="logoBackground"
        />
        <div className="outsidediv">
          <div className="movingGradient"></div>
          <div className="movingGradient2"></div>
          <div cclassName="movingGradient3"></div>
        </div>
        <div className="outsidediv2">
          <div className="movingGradient"></div>
          <div className="movingGradient2"></div>
          <div className="movingGradient3"></div>
        </div>
        <div className="whitebar"></div>
        <div className="greybar"></div>
        <div className="whitegradient"></div>
      </div>
      <Navbar bg="light" expand="xxlg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/create-post">Create a Post</Nav.Link>
            <Nav.Link href="/log-in">Login</Nav.Link>
            <Nav.Link href="/sign-up">Sign-up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
