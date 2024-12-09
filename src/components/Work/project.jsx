import React, { useRef, useState, useEffect } from "react";
import "./project.css";
import PfeiferBros from "../../assets/Pfeifer Bros.png";
import ThePost from "../../assets/thepostshermantx.com_ (1).png";
import UGN from "../../assets/www.theundergroundsportsnutrition.com_.png";
import TechE from "../../assets/afternoon-castle-51017-cacd77f60105.herokuapp.com_ (1).png";
import Challenge from "../../assets/Challenge-1.png";
import Horiseon from "../../assets/horiseon1.png";
import CampFinder from "../../assets/camp_finder_screenshot (1).png";
import ORM from "../../assets/drive.google.com_file_d_1bZStRYMNkoSPmsIhXcUjnbHZ2-4iJzZC_view.png";
import History from "../../assets/history-huddle-screenshot.png";
import Quizzed from "../../assets/quizzed.png";

// // Card Component
// CardList Component with Auto-scroll Effect
const CardList = () => {
  const cards = [
    {
      title: "Tech-E",
      description:
        "A repository for Tech-E, this was a group project, my focus was on creating the forms and frontend design",
      link: "https://github.com/mdpfeifer1/Tech-E",
      imgSrc: TechE,
    },
    {
      title: "Pfeifer Bros",
      description: "A showcase of the Pfeifer Bros project.",
      link: "http://pfeiferbros.com/",
      imgSrc: PfeiferBros,
    },
    {
      title: "The Post",
      description:
        "Website for The Post, a restaurant, features online ordering, full POS integration.",
      link: "https://thepostshermantx.com/",
      imgSrc: ThePost,
    },
    {
      title: "UGN",
      description:
        "E-Commerce for The Underground Sports Nutrition built with WIX.",
      link: "https://www.theundergroundsportsnutrition.com/",
      imgSrc: UGN,
    },
    {
      title: "Challenge",
      description:
        "My first challenge for bootcamp, utilizing flexbox, css and html.",
      link: "https://github.com/mdpfeifer1/Challenge-1",
      imgSrc: Challenge,
    },
    {
      title: "Horiseon",
      description:
        "My Second Challenge for Bootcamp, furthering skills in flexbox, css and html.",
      link: "https://github.com/mdpfeifer1/02-Challenge",
      imgSrc: Horiseon,
    },
    {
      title: "Camp Finder",
      description:
        "My Block One Group Project, we deployed an application that allows users to find National Parks and Campgrounds via Gov API.",
      link: "https://mdpfeifer1.github.io/camp-finder/",
      imgSrc: CampFinder,
    },
    {
      title: "ORM E-Commerce",
      description:
        "This was a video guide on connecting to MySQL database and API testing with Insomnia",
      link: "https://github.com/mdpfeifer1/ORM-e-commerce",
      imgSrc: ORM,
    },
    {
      title: "History Huddle",
      description:
        "This was a group project, here we pulled together front and back end using HTML, CSS, JavaScript, Handlebars, Node.JS, Express.js, MySQL, and Handlebars.",
      link: "https://intense-sierra-33338-d926b5b9f060.herokuapp.com/",
      imgSrc: History,
    },
    {
      title: "Music Quiz",
      description:
        "This was a little timed quiz I had made for school, it is a frontend application that stores user scores in local storage.",
      link: "https://mdpfeifer1.github.io/quizzzed/",
      imgSrc: Quizzed,
    },
  ];

  const repeatedCards = [...cards, ...cards]; // Duplicate cards for seamless looping
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const autoScroll = () => {
      if (!isHovered) {
        container.scrollBy({ left: 1, behavior: "auto" });
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollTo({ left: 0, behavior: "auto" });
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId); 
  }, [isHovered]);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 overflow-hidden rounded-xl shadow-xl shadow-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {repeatedCards.map((card, index) => (
          <div
            key={index}
            className="w-96 h-96 bg-white shadow-xl hover:scale-105 transition-transform duration-200 shadow-black rounded-xl overflow-hidden flex-shrink-0 relative"
          >
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-80 opacity-0 shadow-xl shadow-black hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-100 font-bold">{card.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-gray-500 font-bold text-4xl p-2  hover:scale-110 duration-300 transition-all"
        onClick={scrollLeft}
      >
        &#9664;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2  text-gray-500 font-bold text-4xl p-2 hover:scale-110 duration-300 transition-all"
        onClick={scrollRight}
      >
        &#9654;
      </button>
    </div>
  );
};

export default CardList;