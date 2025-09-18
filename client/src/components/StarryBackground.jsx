import { useEffect, useState } from "react";
import "../styles/StarryBackground.css";

export default function StarryBackground() {
  const stars = Array.from({ length: 100 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // max shift ±10px
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="starry-bg">
      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;

        return (
          <span
            key={i}
            className="star"
            style={{
              "--x": left,
              "--d": duration,
              "--delay": delay,
              transform: `translate(${offset.x}px, ${offset.y}px)`, // parallax shift
            }}
          />
        );
      })}
    </div>
  );
}
