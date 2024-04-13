import { useState } from "react";
import Button from "../Button";
import Logo from "../Logo";
import "./hero.css";
import { Box, Modal } from "@mui/material";
import { GiCancel } from "react-icons/gi";
import brochure from "../../assets/brochure.pdf";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" hero w-full h-full flex flex-col items-center justify-center">
      <Logo />
      <small>Presents</small>
      <h1 className="text-5xl md:text-7xl my-2" id="logo">
        Techotsav
      </h1>

      <p className="my-2">On 21 April, 2024</p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="https://forms.gle/C4iVNtLzLJLR42fH7"
          target="_blank"
          className={`relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[var(--google-green)] rounded-full shadow-md group`}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[var(--google-green)] group-hover:translate-x-0 ease`}
          >
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
            Register Now
          </span>
          <span className="relative invisible">Register Now</span>
        </a>
        <button
          onClick={handleOpen}
          className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[var(--google-blue)] rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[var(--google-blue)] group-hover:translate-x-0 ease">
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
            Learn More
          </span>
          <span className="relative invisible">Learn More</span>
        </button>
      </div>
      <p className="my-2 text-[var(--google-green)] text-center">(Accomodation will be provided on paid Basis.)</p>

      <Modal
        open={open}
        onClose={handleClose}
        className="px-4 py-4 md:px-16 md:py-6"
      >
        <Box className="h-full w-full">
          <div className="relative w-full h-full bg-[var(--bg-clr)] rounded-xl shadow shadow-[var(--google-blue)] flex flex-col md:justify-center gap-y-8 lg:px-20 gap-4 place-items-center overflow-y-scroll p-4">
            <button
              className="absolute top-0 right-0 text-2xl m-2"
              onClick={handleClose}
            >
              <GiCancel />
            </button>
            <h2 className="text-4xl md:text-6xl my-2 text-center">
              What is{" "}
              <span id="logo" className="logo-2">
                Techotsav
              </span>
              ?
            </h2>
            <div className="text-justify">
              <ul className="list-disc space-y-4">
                <li>
                  Techotsav is an amazing opportunity to explore the constantly
                  changing world of technology that you don't want to miss. It
                  doesn't matter if you're an experienced programmer, a new
                  enthusiast, or just excited by the endless possibilities of
                  tech, this event is designed especially for you.
                </li>
                <li>
                  Techotsav is a Tech day that brings young developers, tech
                  enthusiasts, industry experts and students from different
                  parts of Nagpur to learn, share, and collaborate on various
                  topics and dive deep into the world of programming languages,
                  decode the mysteries of AI, and venture into the realms of
                  machine learning and leave with a treasure trove of knowledge
                  and newfound skills ready to conquer the tech universe.
                </li>
                <li>
                  Techotsav attendees get a chance to explore networking
                  opportunities, and foster knowledge exchange and skill
                  development with the tech community, developers, industry
                  experts,and profound Speakers.
                </li>
              </ul>
              <div className="flex flex-wrap justify-center text-center my-8 gap-4">
                <a
                  href="https://forms.gle/C4iVNtLzLJLR42fH7"
                  className={`relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[var(--google-green)] rounded-full shadow-md group`}
                >
                  <span
                    className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[var(--google-green)] group-hover:translate-x-0 ease`}
                  >
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
                    Register Now
                  </span>
                  <span className="relative invisible">Register Now</span>
                </a>
                <a
                  href={brochure}
                  className={`relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[var(--google-yellow)] rounded-full shadow-md group`}
                  download={true}
                >
                  <span
                    className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[var(--google-yellow)] group-hover:translate-x-0 ease`}
                  >
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
                    Download Brochure
                  </span>
                  <span className="relative invisible">Download Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
