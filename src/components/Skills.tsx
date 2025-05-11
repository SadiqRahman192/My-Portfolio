import taiwind from "../public/icons/taiwind.webp"; // Adjust the path based on your structure
import sadiq2 from "../public/icons/html.png"; // Adjust the path based on your structure
import sadiq3 from "../public/icons/node-js-removebg-preview.png"; // Adjust the path based on your structure
import sadiq5 from "../public/icons/git.png"; // Adjust the path based on your structure
import sadiq6 from "../public/icons/css.png"; // Adjust the path based on your structure
import sadiq7 from "../public/icons/mongodb-icon-md.png"; // Adjust the path based on your structure
import sadiq8 from "../public/icons/express-js.png"; // Adjust the path based on your structure
import sadiq9 from "../public/icons/Js.png"; // Adjust the path based on your structure
import sadiq10 from "../public/icons/images-removebg-preview.png"; // Adjust the path based on your structure
import sadiq11 from "../public/icons/ts2.png"; // Adjust the path based on your structure
import sadiq12 from "../public/icons/mongodb-icon-md.png"; // Adjust the path based on your structure
import sadiq13 from "../public/icons/uiux.png"; // Adjust the path based on your structure


const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "RESTful APIs", level: 90 },
      { name: "Git", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "Agile/Scrum", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 dark:bg-white dark:text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        Technical <span className="text-gradient">Skills</span>
      </h2>
      <div id="slider1" className="slider-wrapper">
        <div className="slider">
          <img src={taiwind} alt="taiwinds" />
          <img src={sadiq2} alt="Figma" />
          <img src={sadiq3} alt="Figma" />
          <img src={sadiq10} alt="Figma" />
          <img src={sadiq5} alt="git" />
          <img src={sadiq6} alt="Figma" />
        </div>
      </div>
      <div id="slider2" className="slider-wrapper">
        <div className="slider">
          <img src={sadiq7} alt="Figma" />
          <img src={sadiq8} alt="Figma" />
          <img src={sadiq9} alt="Figma" />
          <img src={sadiq11} alt="Figma" />
          <img src={sadiq13} alt="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
