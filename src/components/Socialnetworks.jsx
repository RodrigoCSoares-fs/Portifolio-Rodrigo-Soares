import {FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/rodrigo-soares-6b8535119/"},
  {name: "github", icon: <FaGithub/>, link: "https://github.com/RodrigoCSoares-fs"},
  {name: "instagram", icon: <FaInstagram/>, link: "https://www.instagram.com/dev.soaresr/"},
];

const Socialnetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default Socialnetworks