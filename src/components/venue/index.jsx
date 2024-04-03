import React from "react";

export default function Venue() {
  return (
    <div className="flex items-center justify-center flex-col h-full w-full">
      {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Venue
      </h1> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14888.734079617623!2d78.99319061738282!3d21.10524840000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4954f412ca411%3A0x4fd4cb2d05b49c7d!2sG.%20H.%20Raisoni%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1711786034220!5m2!1sen!2sin"
        style={{
          border: "0",
          height: "100%",
          width: "100%",
          marginTop: "0",
        }}
        className="rounded-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <br />
      <p className="">Revealing Soon...</p> */}
    </div>
  );
}
