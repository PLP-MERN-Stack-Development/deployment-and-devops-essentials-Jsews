import { useEffect, useState } from "react";
import TemplateCard from "../components/TemplateCard";

export default function Templates() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/templates")
      .then(res => res.json())
      .then(data => setItems(data || []))
      .catch(() => {
        // fallback data if backend not ready
        setItems([
          { _id: "t1", title: "Resume Template", description: "Professional CV layout", image: "https://loremflickr.com/250/250/study,CV", link: "https://www.canva.com" },
          { _id: "t2", title: "Report Template", description: "Academic report layout", image: "https://loremflickr.com/250/250/study,report", link: "https://template.net" }
        ]);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-edudraft-700 mb-4">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i => <TemplateCard key={i._id} {...i} />)}
      </div>
    </div>
  );
}
