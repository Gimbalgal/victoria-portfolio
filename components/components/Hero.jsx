export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">

      <h1 className="text-5xl font-bold mb-4">
        Victoria Augustine Ishabo
      </h1>

      <p className="text-xl text-gray-800 mb-6">
        Web Developer • Product Designer • WordPress Developer
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border px-6 py-3 rounded-lg"
        >
          Download Resume
        </a>
      </div>

    </section>
  )
}