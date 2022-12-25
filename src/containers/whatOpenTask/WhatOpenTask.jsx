import React from "react";
import "./whatOpenTask.css";
import Feature from "../../components/feature/Feature";

const WhatOpenTask = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatOpenTask">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is OpenTask ?"
          text="OpenTask is a perfect workflow management tool for those looking for a type of software which can keep track of the important and necessary tasks related to your business that you need to accomplish in a given timeframe."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The easiest way to manage projects and tasks
        </h1>
      </div>
      <div className="gpt3__whatgpt3-container" id="features">
        <Feature
          title="Chat with the Team"
          text="Are you frustrated that you have to jump in between different platforms while working and communicating with team members? OpenTask is here to take away that worry with a built in Chat portal."
        />
        <Feature
          title="Assign Tasks"
          text="Probably the most integral componet of a workflow management platform, and OpenTask provides one with strong dependencies which assures authenticity and validity."
        />
        <Feature
          title="Project Report"
          text="At the completion of the project or event, OpenTask will provide the option for the generation of a report regarding all the work conducted during the work period."
        />
      </div>
    </div>
  );
};

export default WhatOpenTask;
