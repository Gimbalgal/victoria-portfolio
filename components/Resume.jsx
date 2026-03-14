export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Resume
      </h2>

      <p className="text-gray-400 mb-6">
        Download my resume to learn more about my experience,
        skills, and projects.
      </p>

      {/* button group to prevent overlap */}
      <div className="flex justify-center gap-4">
        <a href="/resume.pdf" target="_blank" className="border px-6 py-3 rounded-lg">
          View Resume
        </a>

        <a href="/resume.pdf" download className="bg-black text-white px-6 py-3 rounded-lg">
          Download Resume
        </a>
      </div>

    </section>
  )
}