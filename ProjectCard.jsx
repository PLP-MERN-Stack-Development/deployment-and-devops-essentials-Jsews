export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-[1.01] transform transition">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded mb-3"/>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 mt-1">{description}</p>
      <a href={link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-indigo-600">View Source</a>
    </div>
  );
}
