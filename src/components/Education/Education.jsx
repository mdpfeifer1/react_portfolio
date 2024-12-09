import React, { useEffect } from "react";
import "./Education.css";
import { FaCircle } from "react-icons/fa"; // For the green blinking dots

const Education = () => {
  const educationData = [
    {
      school: "SMU (edX)",
      degree: "Full-Stack Development Bootcamp",
      duration: "Sep, 2023 - Dec, 2023",
      location: "Dallas",
      description: [
        "Block one covered front-end essentials such as GIT, HTML, CSS, Tailwind, Bootstrap, Bulma, APIs, JavaScript, and JQuery. The block concluded with a group project where, for the first time, we collaborated as a team to achieve a goal. Our team built a basic site that relied on a government API to locate national parks and campgrounds.",
        "Block two covered back-end essentials including Node.JS, Handlebars.JS, MySQL, Express.JS, Heroku, and deepening our knowledge in vanilla JavaScript. The block concluded with a second group project with a new team. Our team created a blog post web application based around historical topics, 'History Huddle.'",
        "Block three united the two with more advanced topics, libraries, and languages such as ReactJs, NoSQL, Stripe, user authentication practices, sharpening the tools to write cleaner and more concise code. The block concluded with a final group project where we built an e-commerce platform called 'Tech-E,' with the challenge of building user authentication, creating an API with product data, and managing user data.",
      ],
    },
    {
      school: "Richland College",
      degree: "Cisco Certified Network Associate",
      duration: "Aug, 2017 - Dec, 2018",
      location: "Richardson",
      description: [
        "Fundamentals of network infrastructure, binary, IPv4 and IPv6 addressing, subnetting, VLANS, RipV2, and OSPF, Cisco equipment such as Routers and Switches, and creating communication between Cloud, Server, Router, Switch, and finally to User.",
        "Learned how to use tools like WireShark, Cisco Packet Tracer, CLIs within Cisco equipment, Microsoft Powershell, and Command Prompt.",
        "I was able to use a lot of these skills as a Restaurant Manager to diagnose different equipment within the network and effectively communicate needs to third-party vendors to resolve issues quickly.",
      ],
    },
  ];

  useEffect(() => {
    // Intersection Observer to handle the fade-in animation when the items come into view
    const options = {
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // Add the fade-in class when in view
        }
      });
    }, options);

    // Observe each description card
    const elements = document.querySelectorAll(".fade-item");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="education-container bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 shadow-xl shadow-black rounded-xl">
      <div className="container mx-auto">
        {/* <h1 className="text-4xl font-bold text-center text-green-500 shadow-xl shadow-black mb-4 p-2">
          Education
        </h1> */}
        <div className="flex flex-wrap gap-8 justify-center lg:justify-between">
          {educationData.map((school) => (
            <div
              key={school.school}
              className={`w-full lg:w-[45%] h-auto mx-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shadow-xl shadow-black rounded-xl p-4 text-yellow-300 ${
                school.school === "SMU"
                  ? "lg:order-1"
                  : school.school === "Richland"
                    ? "lg:order-3"
                    : "lg:order-2"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{school.school}</h2>
              <h3 className="text-xl text-violet-400 mb-2 font-bold">
                {school.degree}
              </h3>
              <p className="text-green-400 font-bold mb-4">
                {school.duration} - {school.location}
              </p>
              <div className="space-y-4">
                {school.description.map((desc, idx) => (
                  <div
                    key={idx}
                    className="fade-item p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-lg shadow-black transform opacity-0 translate-y-4 transition-all duration-700 ease-in-out hover:scale-105"
                  >
                    <div className="flex items-center mb-2">
                      <FaCircle
                        size={8}
                        className="animate-blink text-green-500 flex-shrink-0 mr-2"
                      />
                      <p className="text-violet-400 font-bold text-sm">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
