import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium ${isActive ? "bg-edudraft-500 text-white" : "text-gray-700 hover:bg-gray-100"}`;

  return (
    <header className="bg-white shadow-sm">
      <div className="container-max px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-edudraft-500 to-edudraft-300 flex items-center justify-center text-white font-bold">ED</div>
          <div>
            <h1 className="text-xl font-bold text-edudraft-700">EduDraft</h1>
            <div className="text-xs text-gray-500">Templates · Study materials · Projects</div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/templates" className={linkClass}>Templates</NavLink>
          <NavLink to="/study-materials" className={linkClass}>Study Materials</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}
