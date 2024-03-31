import React, { useState } from "react";
import "./Background.css";

export default function Background() {
  return (
    <div className="bg-container fixed top-0 left-0 h-screen w-screen z-[-1]">
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
    </div>
  );
}
