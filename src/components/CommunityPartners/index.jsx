import React from "react";
import MLSC_logo from "../../assets/images/com_partners/MLSC_GHRCE.webp";
import DAMN_logo from "../../assets/images/com_partners/DAMN.logo.png";
import NASA_logo from "../../assets/images/com_partners/NAsa Space apps challenge nagpur.png";
import DSC_SIT_logo from "../../assets/images/com_partners/DSC_SIT.png";
import MLN_logo from "../../assets/images/com_partners/ML_Nagpur.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

export default function CommunityPartners() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()], { pauseOnHover: false });

  const communityPartners = [
    {
      image: MLSC_logo,
      alt: "MLSC",
      bg: 'w'
    },
    {
      image: DAMN_logo,
      alt: "DAMN",
      bg: 'w'
    },
    {
      image: NASA_logo,
      alt: "NASA",
      bg: 'b'
    },
    {
      image: DSC_SIT_logo,
      alt: "DSC SIT",
      bg: 'w'
    },
    {
      image: MLN_logo,
      alt: "MLN",
      bg: 'b'
    }
  ];

  return (
    <div className="hero w-full h-full flex flex-col items-center text-center gap-4 pt-2 px-8">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Community Partners
      </h1>

      <div className="embla h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full w-full">
          {communityPartners.map((partner, index) => (
            <div
              key={index}
              className={`embla__slide p-4 w-full h-full border-2 border-[var(--google-yellow)] rounded-xl overflow-clip ${partner.bg === 'w' ? 'bg-white' : 'bg-black'}`}
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
