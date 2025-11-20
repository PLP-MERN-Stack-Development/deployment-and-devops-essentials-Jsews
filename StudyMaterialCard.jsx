export default function TemplateCard({ title, description, image, link }) {
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="h-40 w-full object-cover mb-2 rounded"/>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={link} target="_blank" className="text-blue-600 hover:underline mt-2 inline-block">
        Open
      </a>
    </div>
  );
}
