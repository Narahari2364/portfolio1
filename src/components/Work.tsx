import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

type Project = {
  name: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "Stock Market ETL Pipeline",
    category: "Data Engineering · Live Project",
    description:
      "End-to-end automated system tracking 17 stocks across 7 sectors. ML predicts next-day prices (~70-75% accuracy), generates real-time buy/sell signals, validates 2,900+ daily records, and ships alerts via Email & Slack.",
    tools:
      "Python, PostgreSQL, Docker, Streamlit, Pandas, SQLAlchemy, Great Expectations, GitHub Actions",
    image: "/images/etl-dashboard.png",
    link: "https://stock-market-etl-pipeline-5rp9gkvb5jlekm9tcasqqw.streamlit.app",
  },
  {
    name: "Portfolio Website",
    category: "Web Development",
    description:
      "Animated, interactive personal portfolio with a 3D character, smooth scroll, and cinematic lighting—built from the ground up with React, Three.js, and GSAP.",
    tools: "React, TypeScript, Three.js, GSAP, Vite",
    image: "/images/placeholder.webp",
  },
  {
    name: "Bus Ticket System",
    category: "Backend Application",
    description:
      "Object-oriented bus reservation system with seat management, booking flow, and persistent storage—demonstrating modular OOP design.",
    tools: "Python, MySQL, OOP",
    image: "/images/placeholder.webp",
  },
  {
    name: "Crop Cover",
    category: "Web Application",
    description:
      "Web application focused on agriculture and crop coverage information, built with vanilla web technologies for fast load times.",
    tools: "JavaScript, HTML5, CSS3",
    image: "/images/placeholder.webp",
  },
  {
    name: "1947 Indian Restaurant",
    category: "Web Design",
    description:
      "Marketing site for a themed Indian restaurant featuring a story-driven layout, rich typography, and a clean responsive design.",
    tools: "HTML5, CSS3, JavaScript",
    image: "/images/placeholder.webp",
  },
  {
    name: "Guessing Game",
    category: "Java Application",
    description:
      "Console-based number guessing game in Java showcasing control flow, input validation, and clean modular method design.",
    tools: "Java, OOP, Console I/O",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (project: Project, index: number) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
      return;
    }
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
              className={`work-box${activeIndex === index ? " active" : ""}${
                project.link ? " has-link" : ""
              }`}
              key={index}
              onClick={() => handleClick(project, index)}
              data-cursor="disable"
              role={project.link ? "link" : "button"}
              tabIndex={0}
            >
              {project.link && (
                <span className="work-link-badge" aria-hidden>
                  <MdArrowOutward />
                </span>
              )}
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
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
