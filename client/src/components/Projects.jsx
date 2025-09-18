// Projects.jsx
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Event Management Platform",
      desc: "A modern platform for event registration, ticketing, and analytics with real-time insights.",
      link: "#",
      img: "/images/event.jpg",
    },
    {
      title: "E-Commerce Website",
      desc: "A fully functional online shopping site with cart, product search, and secure payment gateway.",
      link: "#",
      img: "/images/ecommerce.jpg",
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing projects, skills, and experience with a sleek modern UI.",
      link: "#",
      img: "/images/portfolio.jpg",
    },
    {
      title: "Blog Platform",
      desc: "A full-stack blogging application with authentication, rich text editor, and comment system.",
      link: "#",
      img: "/images/blog.jpg",
    },
    {
      title: "Chat Application",
      desc: "A real-time chat application built with Node.js, Express, and Socket.io for instant communication.",
      link: "#",
      img: "/images/chat.jpg",
    },
    {
      title: "Task Manager App",
      desc: "A task management tool with user authentication, task creation, deadlines, and progress tracking.",
      link: "#",
      img: "/images/task.jpg",
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
