import React from "react";
import "./Sidebar.css";
import "./Screenshot_2023-01-23_011710-removebg-preview.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <div className="nav">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="links">
        <ul>
          <a target="_blank" href="https://github.com/sankalp142002"><GitHubIcon /></a>
          <a target="_blank" href="https://www.instagram.com/sankalp_1402/?igshid=NDk5N2NlZjQ%3D"><InstagramIcon /></a>
          <a target="_blank" href="https://www.linkedin.com/in/sankalp-bhoyar-bb2433204/"><LinkedInIcon /></a>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
