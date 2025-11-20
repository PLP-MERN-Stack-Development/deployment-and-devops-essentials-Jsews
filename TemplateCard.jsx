export default function StudyMaterialCard({ title, description, image, link }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 shadow-md">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded-md mb-3"/>
      <h4 className="font-semibold text-green-800">{title}</h4>
      <p className="text-gray-600 mt-1">{description}</p>
      <a href={link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-green-700 underline">Read / Download</a>
    </div>
  );
}
