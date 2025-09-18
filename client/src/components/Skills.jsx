import { useState } from "react";
import "../styles/Skills.css";

export default function Skills() {
  const allSkills = {
    all: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 10 },
      { name: "TailWind CSS", level: 25 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 40 },
      { name: "Git/GitHub", level: 80 },
      { name: "VsCode", level: 85 },
      { name: "Figma", level: 40 },
    ],
    frontend: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 10 },
      { name: "TailWind CSS", level: 25 },
      { name: "React", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 40 },
    ],
    tools: [
      { name: "Git/GitHub", level: 80 },
      { name: "VsCode", level: 85 },
      { name: "Figma", level: 40 },
    ],
  };

  const [category, setCategory] = useState("all");

  return (
    <div className="skills">
      <h2>Skills & Technologies</h2>

      {/* Filter Links */}
      <div className="skill-filters">
        <button
          className={category === "all" ? "active" : ""}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className={category === "frontend" ? "active" : ""}
          onClick={() => setCategory("frontend")}
        >
          Frontend
        </button>
        <button
          className={category === "backend" ? "active" : ""}
          onClick={() => setCategory("backend")}
        >
          Backend
        </button>
        <button
          className={category === "tools" ? "active" : ""}
          onClick={() => setCategory("tools")}
        >
          Tools
        </button>
      </div>

      {/* Skills Grid */}
      <div className="skill-bars">
        {allSkills[category].map((skill, index) => (
          <div className="skill-bar" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
