import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Project work at your fingertips",
    text: "See where work stands in a flash, identify next steps, and quickly take action to stay on track.",
  },
  {
    title: "Make sure you hit your deadline",
    text: "Use filters to view tasks which have not been completed and are near to the deadline, in order to take appropriate action.",
  },
  {
    title: "Manage your team’s workload",
    text: "See how busy team members are across projects—all in one view. Make sure no one’s over or underworked, and keep initiatives on track.",
  },
  {
    title: "Keep track of what’s most important",
    text: "Add a level of priority to tasks to track the info that’s most important to your team or company, so it stays front and center.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="benefits">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Hit your goals, without the scramble</h1>
      <p>
        Make every project a success. Map out each step and organize all the
        details of your work in one place.
      </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
