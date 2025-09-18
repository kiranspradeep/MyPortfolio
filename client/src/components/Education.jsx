import "../styles/Education.css";
import { useEffect, useRef, useState } from "react";
import "../styles/Education.css";

export default function Education() {
  const educationItems = [
    { title: "10th Grade", subtitle: "Thiruvagoor hss", year: "2017", extra: "Scored 80%" },
    { title: "Computer Science", subtitle: "Poilkave Higher Secondary", year: "2019", extra: "Science Stream" },
    { title: "BCA", subtitle: "Malabar College of arts and science moodadi,Calicut University", year: "2024", extra: "GPA: 5.8" },
    { title: "MERN Stack Course", subtitle: "Aesthetics edu-tec", year: "2025", extra: "Full Stack Development" }
  ];

  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const items = timeline.querySelectorAll(".timeline-item");
      const line = timeline.querySelector(".timeline-line");

      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress (from top of timeline to bottom)
      const scrollProgress = Math.min(
        Math.max((viewportHeight - rect.top) / (rect.height + viewportHeight), 0),
        1
      );

      // Update line height based on progress
      setLineHeight(scrollProgress * rect.height);

      // Activate dots/items based on scroll
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < viewportHeight * 0.75) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      if (line) {
        line.style.height = `${lineHeight}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lineHeight]);

  return (
   <section id="education" className="education">
    <h2>Education & Learning Roadmap</h2>
    <div className="timeline zigzag" ref={timelineRef}>
      <div className="timeline-line" style={{ height: `${lineHeight}px` }}></div>
      {educationItems.map((item, index) => (
        <div
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <span className="extra-info">{item.extra}</span>
          </div>
          <span className="timeline-year">{item.year}</span>
        </div>
      ))}
    </div>
  </section>
  );
}
