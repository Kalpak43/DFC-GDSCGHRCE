/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h3 className="text-center mt-5">Connect with us on</h3>
        <div className="flex justify-center items-center w-full h-full">
          <a href="https://www.instagram.com/gdscghrce/" className="mr-4">
            <FaInstagram size={32} />
          </a>
          <a href="https://twitter.com/gdscghrce" className="mr-4">
            <FaTwitter size={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-ghrce/"
            className="mr-4"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="https://www.facebook.com" className="mr-4">
            <FaFacebook size={32} />
          </a>
        </div>
      </div>
    </>
  );
}
