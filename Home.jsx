import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="rounded-xl p-8 bg-gradient-to-from-edudraft-50 via-edudraft-100 to-white shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-edudraft-700">Learn. Build. Share.</h2>
            <p className="mt-4 text-gray-700">EduDraft provides templates, study materials and project samples for students and learners. Start building your portfolio today.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/templates" className="px-5 py-3 bg-edudraft-500 text-white rounded-md">Explore Templates</Link>
              <Link to="/study-materials" className="px-5 py-3 border rounded-md">Study Materials</Link>
            </div>
          </div>
          <div className="w-80">
            <img src="https://loremflickr.com/400/250/study,education" alt="banner" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-bold text-edudraft-700">Popular resources</h3>
        <p className="text-gray-600 mt-2">Handpicked templates, materials and projects to get you started quickly.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 rounded-xl bg-white shadow">
            <h4 className="font-semibold">Fast templates</h4>
            <p className="text-sm text-gray-600 mt-2">Resumes, proposals, class reports.</p>
          </div>
          <div className="p-4 rounded-xl bg-white shadow">
            <h4 className="font-semibold">Study materials</h4>
            <p className="text-sm text-gray-600 mt-2">Notes and practice questions.</p>
          </div>
          <div className="p-4 rounded-xl bg-white shadow">
            <h4 className="font-semibold">Project samples</h4>
            <p className="text-sm text-gray-600 mt-2">Complete example projects with source links.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
