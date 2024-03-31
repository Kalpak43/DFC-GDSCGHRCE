import React from "react";

export default function Button({ text, clr, link, download=false }) {
  console.log(text, clr)
  return (
    <a
      href={link}
      className={
        `relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-${clr} rounded-full shadow-md group`
      }
      download={download}
    >
      <span className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-${clr} group-hover:translate-x-0 ease`}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible">{text}</span>
    </a>
  );
}
