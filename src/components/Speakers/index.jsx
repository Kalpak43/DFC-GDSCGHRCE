import React, { useState } from "react";
import Card from "./Card";
import { TiPlus } from "react-icons/ti";
import { FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Speakers() {
  const [hideModal, setHideModal] = useState(true);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Speakers
      </h1>
      <br />
      <p className="">Revealing Soon...</p>
      {/* <p className="">
        Revealing Soon...
      </p>  */}
      {/* <Card name="Aman Tiwari" role="Developer"/> */}
      {/* <div className="relative h-full w-full border-2 border-[var(--google-yellow)] rounded-xl mb-4 flex flex-col md:flex-row justify-center gap-4 items-center p-4 bg-black bg-opacity-40">
        <div className="w-[60%] md:w-auto md:h-[70%] aspect-square border-2 rounded-full"></div>
        <div className="text-center md:text-left">
          <h4 className="text-xl">Kalpak Goshikwar</h4>
          <p>Full Stack Web Developer</p>
        </div>

        <div className="absolute cursor-pointer group flex gap-2 w-[90%] md:w-1/2 py-4 px-2 rounded-full bg-[var(--google-yellow)] bottom-0 left-0 right-0 mx-auto translate-y-[50%] overflow-clip">
          <div className="absolute left-0 top-0 bottom-0 h-fit my-auto mx-2 p-1 aspect-square border-2 rounded-full group-hover:-rotate-90 transition-all duration-300">
            <TiPlus className="text-2xl" />
          </div>
          <div>
            <div className="origin-left group-hover:-rotate-90 transition-all duration-300 flex items-center">
              <p className="ml-12">Socials</p>
            </div>
            <div className="origin-left rotate-90 group-hover:-rotate-0 absolute h-full w-full top-0 bottom-0 pl-12 flex items-center gap-2 transition-all duration-300">
              <div className="p-1 aspect-square border-2 rounded-full">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="p-1 aspect-square border-2 rounded-full">
                <FaLinkedin className="text-2xl" />
              </div>
              <div className="p-1 aspect-square border-2 rounded-full">
                <FaXTwitter className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
