import React, { useEffect, useState } from "react";
import Card from "./Card";
import { TiPlus } from "react-icons/ti";
import { FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Speaker1 from "../../assets/images/speakers/Dr_Rizwan_Ahmed.jpeg";

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Rizwan Ahmed",
      role: "Division Head-Digital Innovation @delaPlex",
      image: Speaker1,
      linkedin: "https://www.linkedin.com/in/dr-rizwanahmed/",
    },
    {
      name: "Dr. Rizwan Ahmed",
      role: "Division Head-Digital Innovation @delaPlex",
      image: Speaker1,
      linkedin: "https://www.linkedin.com/in/dr-rizwanahmed/",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "y" },
    [Autoplay()],
    {
      pauseOnHover: false,
    }
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="flex justify-between items-center gap-4 w-full my-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
          Speakers
        </h1>
        <div className="flex text-2xl">
          <button>
            <IoIosArrowDropleft />
          </button>
          <button>
            <IoIosArrowDropright />
          </button>
        </div>
      </div>

      <div className="embla h-full w-full" ref={emblaRef}>
        <div className="embla__container__vertical h-full w-full">
          {speakers.map((speaker, index) => (
            <Card key={index} {...speaker} />
          ))}
        </div>
      </div>

      {/* <div className="relative h-full w-full border-2 border-[var(--google-blue)] rounded-xl mb-4 flex flex-col md:flex-row justify-center gap-4 items-center p-4 bg-black bg-opacity-40">
        <div className="w-[60%] md:w-auto md:h-[70%] aspect-square border-2 rounded-full">
          <img
            src={""}
            alt={"name"}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xl">{"name"}</h4>
          <p>{"role"}</p>
        </div>

        <a
          href={"linkedin"}
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
      </div> */}
    </div>
  );
}
