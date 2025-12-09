import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    name: "Stock Market ETL Pipeline",
    category: "Data Engineering",
    tools: "Python, PostgreSQL, Alpha Vantage API, ETL",
    image: "/images/placeholder.webp",
  },
  {
    name: "Portfolio Website",
    category: "Web Development",
    tools: "React, TypeScript, Three.js, GSAP, Vite",
    image: "/images/placeholder.webp",
  },
  {
    name: "Bus Ticket System",
    category: "Backend Application",
    tools: "Python, MySQL, OOP",
    image: "/images/placeholder.webp",
  },
  {
    name: "Crop Cover",
    category: "Web Application",
    tools: "JavaScript, HTML5, CSS3",
    image: "/images/placeholder.webp",
  },
  {
    name: "1947 Indian Restaurant",
    category: "Web Design",
    tools: "HTML5, CSS3, JavaScript",
    image: "/images/placeholder.webp",
  },
  {
    name: "Guessing Game",
    category: "Java Application",
    tools: "Java, OOP, Console I/O",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div
          className={`work-grid${activeIndex !== null ? " has-active" : ""}`}
        >
          {projects.map((project, index) => (
            <div
              className={`work-box${activeIndex === index ? " active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
              data-cursor="disable"
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
