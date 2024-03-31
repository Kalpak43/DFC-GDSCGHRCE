/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggler from "../ThemeToggler";

export default function SocialMedia() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-full gap-x-4 text-white ">
        <a
          href="https://www.instagram.com/gdscghrce/"
          className="block p-2 border-2 w-fit rounded-full text-3xl md:text-4xl bg-pink-500"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com/gdscghrce" className="block p-2 border-2 w-fit rounded-full text-3xl md:text-4xl bg-black">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/company/gdsc-ghrce/" className="block p-2 border-2 w-fit rounded-full text-3xl md:text-4xl bg-[#0077B5]">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@gdscghrce5152" className="block p-2 border-2 w-fit rounded-full text-3xl md:text-4xl bg-[#E10600]">
          <FaYoutube size={32} />
        </a>
        <a href="https://discord.com/invite/q5yUfBFkSV" className="block p-2 border-2 w-fit rounded-full text-3xl md:text-4xl bg-[#5865F2]">
          <FaDiscord size={32} />
        </a>
        <ThemeToggler />
      </div>
    </>
  );
}
