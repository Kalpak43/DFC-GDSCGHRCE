import React from "react";
import "./Giveaways.css";

export default function Giveaways() {
  return (
    <div className="hero w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Perks For Attendees
      </h1>
      <br />
      <ul className="list-ticks px-2 md:px-8">
        <li>Elevate your career at the bustling Career Fair.</li>
        <li>Craft your path with expert Resume Building insights.</li>
        <li>Propel your growth in the Career Development Session.</li>
        <li>Score Awesome swags, and goodies, just for you!</li>
      </ul>
    </div>
  );
}
