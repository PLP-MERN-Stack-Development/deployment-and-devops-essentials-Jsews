import { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setItems(data || []))
      .catch(() => {
        setItems([
          { _id: "p1", title: "Todo App", description: "React + Node todo sample", image: "https://loremflickr.com/250/250/study,project", link: "https://github.com" },
          { _id: "p2", title: "Chat App", description: "Socket.io chat", image: "https://loremflickr.com/250/250/study,chat", link: "https://github.com" }
        ]);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Project Samples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i => <ProjectCard key={i._id} {...i} />)}
      </div>
    </div>
  );
}
