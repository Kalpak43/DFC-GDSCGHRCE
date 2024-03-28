import React from "react";
import "./Giveaways.css";

export default function Giveaways() {
  return (
    <div className="hero w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Perks For Attendees
      </h1>
      <br />
      <ul className="list-ticks px-2 md:px-8">
        <li>Score Awesome swags, and goodies, just for you!</li>
        <li>Ignite your passions with cutting-edge Tech Talks.</li>
        <li>Unwind, and connect with engaging games, and activities.</li>
        <li>Food and Beverages</li>
      </ul>
    </div>
  );
}
