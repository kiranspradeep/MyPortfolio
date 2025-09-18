import { useEffect, useState } from "react";
import "../styles/StarryBackgroundLight.css";

export default function StarryBackgroundLight() {
  const stars = Array.from({ length: 150 });
  const meteors = Array.from({ length: 6 });

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="starry-light-bg">
      {/* Stars */}
      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 10;
        const size = Math.random() * 2 + 1;
        const color = ["#fff", "#ffe", "#aef"][Math.floor(Math.random() * 3)];

        return (
          <span
            key={`star-${i}`}
            className="star-light"
            style={{
              "--x": left,
              "--d": duration,
              "--delay": delay,
              "--color": color,
              width: `${size}px`,
              height: `${size}px`,
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          />
        );
      })}

      {/* Meteors */}
      {meteors.map((_, i) => {
        const delay = Math.random() * 15;
        const top = Math.random() * 70;
        const speed = Math.random() * 2 + 1.5;
        const angle = -15 - Math.random() * 20;

        return (
          <span
            key={`meteor-${i}`}
            className="meteor"
            style={{
              "--delay": `${delay}s`,
              "--top": `${top}vh`,
              "--speed": `${speed}s`,
              "--angle": `${angle}deg`,
            }}
          />
        );
      })}
    </div>
  );
}
