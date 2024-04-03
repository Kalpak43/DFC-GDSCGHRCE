import React, { useState } from "react";
import "./Card.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Card(props) {
  const [showSocial, setShowSocial] = useState(false);

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div className="container ">
      <div className="card flex h-[90%] justify-start items-start w-[100%] ">
        
        <div className='flex justify-start items-start gap-0  px-12 w-full '>
        <div className="card__border rounded-full self-start p-1 mt-5 hover:scale-105">
          <img
            src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
            alt="card image"
            className="card__img"
          />
        </div>
        <div className='mt-12 '>
          <h3 className="card__name text-3xl">{props.name}</h3>
          <span className="card__profession text-white text-lg">{props.role}</span>

        </div>
        </div>

        <div className={`card__social ${showSocial ? 'animation' : ''}`} id="card-social">
          <div className="card__social-control ">
            <div className="card__social-toggle" onMouseEnter={toggleSocial} id="card-toggle">
              <span className="ri--add-line"></span>
            </div>

            <span className="card__social-text text-sm font-semibold ">Social Networks</span>

            <ul className="card__social-list">
              <a href={props.Linkedin} target="_blank" className="card__social-link">
              <FaLinkedin  />
              </a>

              <a href={props.Instagram} target="_blank" className="card__social-link">
              <FaSquareInstagram />
              </a>

              <a href={props.Twitter} target="_blank" className="card__social-link">
              <FaSquareXTwitter />
              </a>
            </ul>
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default Card;
