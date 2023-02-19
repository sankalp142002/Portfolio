import React from "react";
import "./About.css";

function Skills() {
  return (
    <div className="about">
      <h1 className="about-head"> "Who am I?" </h1>
      <div className="charts">
      <h5> Front-end </h5>
        <span className="chart">
           <div className="load1"></div> 
        </span>
        <h5> Back-end </h5>
        <span className="chart">
           <div className="load2"></div> 
        </span>
        <h5> React </h5>
        <span className="chart">
           <div className="load3"></div> 
        </span>
        <h5> Python </h5>
        <span className="chart">
           <div className="load4"></div> 
        </span>
      </div>
      <div className="intro">
        <p>
          
          Get ready to meet Sankalp, the Full Stack Web Wizard of IIIT Gwalior!
          With a magic touch on both front - end and back - end development, I
          turn dreams into reality; from crafting beautiful user interfaces to
          seamlessly integrating with databases.I am a constant learner, always
          seeking to improve my skills and stay ahead of the latest
          technologies.So if you want your website to be the envy of the
          internet, I am the developer you 're looking for. <br />
          Lets build something together! Chick here.
        </p>
      </div>
      <div class="container2">
	<div class="field">
		<div class="scroll"></div>
	</div>
</div>
    </div>
  );
}

export default Skills;
