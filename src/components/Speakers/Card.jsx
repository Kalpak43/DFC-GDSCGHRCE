import React, { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Card({ name, role, image, linkedin }) {
  return (
    <div className="w-full h-full py-4">
      <div className="relative h-[90%] md:h-[80%] w-full border-2 border-[var(--google-blue)] rounded-xl mb-4 flex flex-col md:flex-row gap-4 items-center p-4 md:px-10 pb-8 bg-black bg-opacity-40">
        <div className="w-[50%] md:w-auto md:h-[90%] aspect-square border-2 rounded-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="text-center md:text-left mb-2 md:mb-0 text-white md:col-start-2 md:col-end-4">
          <h4 className="text-xl">{name}</h4>
          <p className="text-sm">{role}</p>
        </div>

        <a
          href={linkedin}
          target="_blank"
          className="block absolute cursor-pointer group flex gap-2 w-[90%] md:w-1/2 py-2 px-2 rounded-full bg-[var(--bg-clr)] bg-opacity-10 hover:bg-[#0077B5] hover:text-white transition-all duration-200 border-2 border-[var(--google-blue)] bottom-0 left-0 right-0 mx-auto translate-y-[50%] overflow-clip"
        >
          <div className="absolute left-0 top-0 bottom-0 h-fit my-auto mx-2 p-1 aspect-square rounded-full bg-[#0077B5]">
            <FaLinkedin className="text-2xl text-white" />
          </div>
          <div className="font-bold text-xl">
            <div className="origin-left group-hover:-rotate-90 transition-all duration-300 flex items-center">
              <p className="ml-12">Linkedin</p>
            </div>
            <div className="origin-left rotate-90 group-hover:-rotate-0 absolute h-full w-full top-0 bottom-0 pl-12 flex items-center gap-2 transition-all duration-300">
              <p>Connect!</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
