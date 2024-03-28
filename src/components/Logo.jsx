import React from "react";

export default function Logo() {
  return (
    <div className="flex">
      <a
        href="https://gdscghrce.netlify.app/"
        className="border-none bg-transparent hover:border-none hover:bg-transparent"
      >
        <span className="logo w-fit z-50 flex justify-center items-center">
          <svg
            className="h-8 md:h-12"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 192"
            width="50"
            height="100"
          >
            <defs></defs>
            <title>dsc_icon</title>
            <path
              className="Logo_logoRedPart__QJGXu text-[var(--google-red)]"
              fill="currentColor"
              d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
            ></path>
            <path
              className="Logo_logoBluePart__Gg0LP text-[var(--google-blue)]"
              fill="currentColor"
              d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
            ></path>
            <path
              className="Logo_logoYellowPart__AVkWI text-[var(--google-green)]"
              fill="currentColor"
              d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
            ></path>
            <path
              className="Logo_logoGreenPart__LnIju text-[var(--google-yellow)]"
              fill="currentColor"
              d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
            ></path>
          </svg>
          <div className="logo-text flex-col gap-0 relative normal-case font-normal text-[var(--font-clr)]">
            <p className="text-sm md:text-lg">
              Gooogle Developer Student Clubs
            </p>
            <small className="text-[60%] md:text-[85%] absolute top-[80%]">
              G.H. Raisoni College of Engineering, Nagpur
            </small>
          </div>
        </span>
      </a>
    </div>
  );
}
