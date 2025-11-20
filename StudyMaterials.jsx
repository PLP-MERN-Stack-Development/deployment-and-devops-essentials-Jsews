import { useEffect, useState } from "react";
import StudyMaterialCard from "../components/StudyMaterialCard";


export default function StudyMaterials() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/study-materials")
      .then(res => res.json())
      .then(data => setItems(data || []))
      .catch(() => {
        setItems([
          { _id: "s1", title: "JavaScript Guide", description: "Basic to advanced JS", image: "https://loremflickr.com/250/250/study,exam", link: "https://developer.mozilla.org" },
          { _id: "s2", title: "React Handbook", description: "React concepts and patterns", image: "https://loremflickr.com/250/250/library", link: "https://reactjs.org" }
        ]);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-green-700 mb-4">Study Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i => <StudyMaterialCard key={i._id} {...i} />)}
      </div>
    </div>
  );
}
