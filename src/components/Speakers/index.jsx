import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Speaker1 from "../../assets/images/speakers/Dr_Rizwan_Ahmed.jpeg";
import Speaker2 from "../../assets/images/speakers/Shrikant_Ardhapurkar.jpeg";
import Speaker3 from "../../assets/images/speakers/Dr_Akshay_Zadgaonkar.jpeg";
import Speaker4 from "../../assets/images/speakers/Aniruddha_Kalbande.jpeg";
import Speaker5 from "../../assets/images/speakers/Shivam_Joshi.jpeg";
import Speaker6 from "../../assets/images/speakers/Vishnu_Pillai.png";
import Speaker7 from "../../assets/images/speakers/Ashutosh_Shivhare.jpeg";
import Speaker8 from "../../assets/images/speakers/akashS.jpg";
import Speaker9 from "../../assets/images/speakers/Sachin_Untawale.jpeg";
import Speaker10 from "../../assets/images/speakers/maneesh.png";
import Speaker11 from "../../assets/images/speakers/arvind.png";
import Speaker12 from "../../assets/images/speakers/RamaR.jpg";
import Speaker13 from "../../assets/images/speakers/AmitKale.jpg";

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Rizwan Ahmed",
      role: "CTO @delaPlex",
      image: Speaker1,
      linkedin: "https://www.linkedin.com/in/dr-rizwanahmed/",
      title: "",
    },
    {
      name: "Shirkant Ardhapurkar",
      role: "Founder @Crypto Forensic Technology",
      image: Speaker2,
      linkedin: "https://www.linkedin.com/in/shrikant-ardhapurkar/",
      title: "",
    },
    {
      name: "Dr. Akshay Zadgaonkar",
      role: "Co-Founder @BabyVerse",
      image: Speaker3,
      linkedin: "https://www.linkedin.com/in/akshayz/",
      title: "",
    },
    {
      name: "Aniruddha Kalbande",
      role: "Founder & CEO of Fireblaze AI School",
      image: Speaker4,
      linkedin: "https://www.linkedin.com/in/aniruddhakalbande/",
      title: "",
    },
    {
      name: "Shivam Joshi",
      role: "Founder @Codon's Ltd.",
      image: Speaker5,
      linkedin: "https://www.linkedin.com/in/the-shivamjoshi/",
      title:
        "Shivam Joshi, the dynamic Founder and Executive Director of Codon's Technologies Ltd. Renowned as India's youngest corporate trainer for AI, Shivam initiated his entrepreneurial journey at the age of 18. With a profound expertise in AI/ML, data science, and data analysis, he has provided corporate training to industry giants such as LTI, JP morgan ,CITI, Principal Global, etc. Shivam's international presence is equally impressive; he represented India as a delegate at the ESA Expo Dubai and the IYSA Indonesia. He is also a core member of IEEE Rising Star Las Vegas. Let's welcome Shivam Joshi with a round of applause.",
    },
    {
      name: "Vishnu Pillai",
      role: "Devops Engineer @Capegemini",
      image: Speaker6,
      linkedin: "https://www.linkedin.com/in/vishnu-pillai-797a67172/",
      title: ""
    },
    {
      name: "Ashutosh Shivhare",
      role: "Director @Data U Technologies",
      image: Speaker7,
      linkedin: "https://www.linkedin.com/in/ashutoshshivhare/",
      title: "",
    },
    // {
    //   name: "Aakash Singh",
    //   role: "ASE @Deepcognition.ai",
    //   image: Speaker8,
    //   linkedin: "https://www.linkedin.com/in/aakash-singh-provoker/",
    // },
    {
      name: "Aakash Singh",
      role: "Marketing Director @mindZcloud Technologies",
      image: Speaker8,
      linkedin: "https://www.linkedin.com/in/aakash-singh-58479b96/",
      title: "",
    },
    {
      name: "Dr. Sachin Untawale",
      role: "Director @G H Raisoni College of Engineering, Nagpur",
      image: Speaker9,
      linkedin: "https://www.linkedin.com/in/sachin-untawale-17504274/",
      title: "",
    },
    {
      name: "Amit Kale",
      role: "Associate Vice President @GlobalLogic ",
      image: Speaker13,
      linkedin: "https://www.linkedin.com/in/amitakale/",
      title: "",
    },
    {
      name: "Arvind Kumar",
      role: "Center Head @TCS",
      image: Speaker11,
      linkedin: "https://www.linkedin.com/in/arvind-kumar-2556716/",
      title: "",
    },
    {
      name: "Ramakrishna R",
      role: "Co-Founder and CEO @ImmverseAI",
      image: Speaker12,
      linkedin: "https://www.linkedin.com/in/rama-immverse/",
      title: "",
    },
    {
      name: "Maneesh Nair",
      role: "Employability and Resume Trainer",
      image: Speaker10,
      linkedin: "https://www.linkedin.com/in/maneesh-diwakaran-nair-05251525/",
      title: "",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "x" }, [
    Autoplay(),
  ], {pauseOnHover: true});
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    });
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Speakers
      </h1>
      <br />
      <p className="">Revealing Soon...</p> */}

      <div className="flex justify-between items-center gap-4 w-full my-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
          Speakers
        </h1>
        <div className="flex text-2xl">
          <button onClick={scrollPrev}>
            <IoIosArrowDropleft />
          </button>
          <button onClick={scrollNext}>
            <IoIosArrowDropright />
          </button>
        </div>
      </div>

      <div className="embla h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full w-full">
          {speakers.map((speaker, index) => (
            <div key={index} className="embla__slide p-4">
              <Card {...speaker} />
            </div>
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
