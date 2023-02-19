import React from "react";
import "./Landing.css";
import PlaceIcon from '@mui/icons-material/Place';

function Landing() {
  return (
    <div className="landing">
      <div className="loc">
        <PlaceIcon /> <span>India</span>
      </div>
      <div className="landing-content">
        <h1>Hello World!</h1>
        <h1>
          I'm S<span className="anitext">a</span>n
          <span className="anitext">k</span>a<span className="anitext">l</span>
          p.
        </h1>
        <p>
            
            A web developer and Tech Enthusiast
                      </p>
        <div className="contactme">
        <button type="button" className="fill">Contact Me</button>
        <a className="fill resume" target="_blank" href="https://drive.google.com/file/d/1AvQuzAqv9IZKFCgKIXmCZYLpPOJnMarn/view?usp=sharing">Resume</a>
        </div>

      </div>
      <div class="container">
	<div class="field">
		<div class="scroll"></div>
	</div>
</div>
    </div>
  );
}

export default Landing;
