import React from "react";
import ID from "../../assets/images/swags/swag1.png";
import BOTTLE from "../../assets/images/swags/swag2.png";
import TSHIRT from "../../assets/images/swags/swag3.png";
import STICKER from "../../assets/images/swags/swag4.png";

export default function Sponsors() {
  return (
    <div className="hero w-full h-full flex flex-col items-center justify-center py-4">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Swags
      </h1>
      <div className="h-full w-full grid gap-4 grid-cols-2 md:grid-rows-2 place-items-center">
        <div className="h-full aspect-square p-2 border-2 border-[var(--font-clr)] rounded-full bg-opacity-40 bg-[#e3e3e3] max-h-[100px]">
          <img src={ID} alt="ID" className="
          object-contain h-full w-full" />
        </div>
        <div className="h-full aspect-square p-2 border-2 border-[var(--font-clr)] rounded-full bg-opacity-40 bg-[#e3e3e3] max-h-[100px]">
          <img src={BOTTLE} alt="ID" className="
          object-contain h-full w-full" />
        </div>
        <div className="h-full aspect-square p-2 border-2 border-[var(--font-clr)] rounded-full bg-opacity-40 bg-[#e3e3e3] max-h-[100px]">
          <img src={TSHIRT} alt="ID" className="
          object-contain h-full w-full" />
        </div>
        <div className="h-full aspect-square p-2 border-2 border-[var(--font-clr)] rounded-full bg-opacity-40 bg-[#e3e3e3] max-h-[100px]">
          <img src={STICKER} alt="ID" className="
          object-contain h-full w-full" />
        </div>
        {/* <img src={ID} alt="" />
      <img src={BOTTLE} alt="" />
      <img src={TSHIRT} alt="" />
      <img src={STICKER} alt="" /> */}
      </div>
    </div>
  );
}
