import React, { useEffect } from "react";
import MLSC_logo from "../../assets/images/com_partners/MLSC_GHRCE.webp";
import DAMN_logo from "../../assets/images/com_partners/DAMN.logo.png";
import NASA_logo from "../../assets/images/com_partners/NAsa Space apps challenge nagpur.png";
import DSC_SIT_logo from "../../assets/images/com_partners/DSC_SIT.png";
import MLN_logo from "../../assets/images/com_partners/ML_Nagpur.png";
import THM_logo from "../../assets/images/com_partners/THM.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function CommunityPartners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()], {
    pauseOnHover: false,
  });

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

  const communityPartners = [

    {
      image: DAMN_logo,
      alt: "DAMN",
      bg: "w",
    },
    {
      image: NASA_logo,
      alt: "NASA",
      bg: "b",
    },
    {
      image: DSC_SIT_logo,
      alt: "DSC SIT",
      bg: "w",
    },
    {
      image: MLN_logo,
      alt: "MLN",
      bg: 'b'
    },
    {
      image: THM_logo,
      alt: "THM",
      bg: 'b'
    }
  ];

  return (
    <div className="hero w-full h-full flex flex-col items-center text-center gap-4 pt-2 px-1 md:px-8">
      <div className="flex justify-between items-center gap-4 w-full">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
          Community Partners
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
          {communityPartners.map((partner, index) => (
            <div
              key={index}
              className={`embla__slide p-4 w-full h-full border-2 border-[var(--google-yellow)] rounded-xl overflow-clip ${
                partner.bg === "w" ? "bg-white" : "bg-black"
              }`}
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="h-full object-contain m-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
