import React from "react";
import "./Resume.scss";

const MainSectionResume = () => {
  return (
    <div className="main-container-resume-section">
      <div className="resume-details">
        <div className="left-section-primary-details">
          <header>
            <h1>Your Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </header>
          <section className="section-container">
            <h4>Experience</h4>
            <b>Company</b>, Location - Job Title
            <br />
            <span>Month 2010 - PRESENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </section>
          <section className="section-container">
            <h4>Education</h4>
            <b>School Name</b>, Location - Degree
            <br />
            <span>Month 2010 - PRESENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </section>

          <section className="section-container">
            <h4>Projects</h4>
            <b>Project Name</b>, Detail
            <br />
            <span>Month 2010 - PRESENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </section>
        </div>
        <div className="right-section-secondary-details">
          <header>
            <address>
              123 Your Street <br />
              Your City,
              <br /> ST 12345 (123) 456-7890 <br /> abc@example.com
            </address>
          </header>
          <section className="section-container">
            <h4>Skills</h4>
            Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt.
          </section>
          <section className="section-container">
            <h4>Awards</h4>
            Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt.
          </section>
          <section className="section-container">
            <h4>Languages</h4>
            Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt.
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainSectionResume;
