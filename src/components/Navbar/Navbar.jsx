import React, { useRef } from "react";
import "./Navbar.css";

function Navbar() {

  const checkRef = useRef(null);

  const links = [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "About",
      url: "#about"
    },
    {
      text: "Speakers",
      url: "#speakers"
    },
    {
      text: "Schedule",
      url: "#schedule"
    },
    {
      text: "Venue",
      url: "#venue"
    }
  ]

  const handleToggle = () => {
    const nav = document.getElementById("nav");
    if (checkRef.current.checked) {
      nav.style.transform = "translate(0, 0)";
    } else {
      nav.style.transform = "translate(100%, 0)";
    }
  };

  return (
    <header className="header py-4 px-4 md:px-8 flex justify-between items-center bg-[var(--bg-clr)]">
      <span className="logo">
        {/* <Logo /> */}
        <p className="text-3xl">Logo</p>
      </span>

      <div className="flex items-center">
        <div className="menu-toggle relative block md:hidden">
          <input
            type="checkbox"
            id="check-box"
            name="Menu toggle"
            ref={checkRef}
            onClick={handleToggle}
          />

          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="nav" id="nav">
          <ul className="flex flex-col md:flex-row md:items-center gap-8">
            {
              links.map((link, index) => (
                <li key={index} className="hover:text-[var(--google-blue)] transition-all duration-100">
                  <a href={link.url}>
                    {link.text}
                  </a>
                </li>
              ))
            }
            <li>
              <a href="/" className="btn">
                Register Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
