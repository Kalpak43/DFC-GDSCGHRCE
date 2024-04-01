import React from "react";
import MLSC_logo from "../../assets/images/com_partners/MLSC_GHRCE.webp";

export default function CommunityPartners() {
  return (
    <div className="hero w-full h-full flex flex-col items-center text-center gap-4 pt-2 px-2">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Community Partners
      </h1>
      <div className="w-full h-full p-4 border-2 border-[var(--google-yellow)] rounded-xl overflow-clip bg-white">
        <img src={MLSC_logo} alt="" className="h-full object-contain m-auto" />
      </div>
    </div>
  );
}
