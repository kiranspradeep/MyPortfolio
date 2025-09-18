import { Sun, Moon } from "lucide-react";
import "../styles/ThemeToggle.css";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="toggle-btn"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}


// import { Sun, Moon } from "lucide-react";
// import "../styles/ThemeToggle.css";

// export default function ThemeToggle({ theme, setTheme }) {
//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="toggle-btn"
//     >
//       {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }
