import { projects } from "@/data/project"

export default function Projects() {
  return (
    <section id="projects" className="py-20">

      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div key={index} className="border p-6 rounded-lg">

            <img src={project.image} className="mb-4" />

            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-600">
              {project.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}