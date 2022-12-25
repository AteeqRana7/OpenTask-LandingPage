import React from "react";

import { Footer, Features, WhatOpenTask, Header } from "../../containers";

import { CTA, Navbar } from "../../components";
import "./homePage.css";

const homePage = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatOpenTask />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default homePage;
