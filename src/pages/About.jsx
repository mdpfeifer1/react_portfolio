import React from 'react';
import myGirlImage from '../assets/My girl.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const socialLinks = [
    { icon: faInstagram, url: 'https://www.instagram.com/mikelpfeifer/' },
    { icon: faGithub, url: 'https://github.com/mdpfeifer1' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/mikel-pfeifer-690035175' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4"></nav>
      {/* Main Content */}
      <div className="container mx-auto py-16">
        <div className="text-center">
          <img src={myGirlImage} alt="My Girl" className="rounded-full h-64 w-42 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Mikel Pfeifer</h1>
          <p className="text-lg text-gray-700">Full Stack Developer</p>
        </div>
        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="flex justify-center text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center">
            <span className="bg-blue-500 text-white px-4 py-2 m-2 rounded-full">React</span>
            <span className="bg-blue-500 text-white px-4 py-2 m-2 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-500 text-white px-4 py-2 m-2 rounded-full">JavaScript</span>
            <span className="bg-blue-500 text-white px-4 py-2 m-2 rounded-full">MERN</span>
          </div>
        </section>
        {/* Projects Section */}
        <section className="mt-12">
          <h2 className="flex justify-center text-2xl font-bold mb-4">Social Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <FontAwesomeIcon icon={link.icon} className="text-3xl mr-4" />
                <span>{link.url.replace(/^https?:\/\//, '')}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;