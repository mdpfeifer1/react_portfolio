import React from "react";
import PfeiferBros from "../assets/Pfeifer Bros.png";
import ThePost from "../assets/thepostshermantx.com_ (1).png";
import UGN from "../assets/www.theundergroundsportsnutrition.com_.png";

const Card = ({ title, description, imgSrc, link }) => {
  const cardStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl hover:scale-105 hover:ease-in-out duration-200 shadow-black rounded-md overflow-hidden m-4 relative">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="p-44 bg-opacity-75 backdrop-filter backdrop-blur"
          style={cardStyle}
        >
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-gray-200 mt-2">{description}</p>
        </div>
      </a>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "Tech-E",
      description: "A project repository for Tech-E",
      link: "https://github.com/mdpfeifer1/Tech-E",
      imgSrc:
        "../assets/afternoon-castle-51017-cacd77f60105.herokuapp.com_ (1).png",
    },
    {
      title: "Pfeifer Bros",
      description: "A showcase of the Pfeifer Bros project.",
      link: "http://pfeiferbros.com/",
      imgSrc: PfeiferBros,
    },
    {
      title: "The Post",
      description: "Website for The Post, a restaurant in Sherman, TX.",
      link: "https://thepostshermantx.com/",
      imgSrc: ThePost,
    },
    {
      title: "UGN",
      description: "Website for The Underground Sports Nutrition.",
      link: "https://www.theundergroundsportsnutrition.com/",
      imgSrc: UGN,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          link={card.link}
          imgSrc={card.imgSrc}
        />
      ))}
    </div>
  );
};

export default CardList;
