import { wordpress } from "@/data/wordpress"

export default function Wordpress() {
  return (
    <section id="wordpress" className="py-20">

      <h2 className="text-3xl font-bold text-center mb-12">
        WordPress Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {wordpress.map((site, index) => (
          <div key={index} className="border rounded-lg p-4">

            <img
              src={site.image}
              alt={site.title}
              className="rounded-md mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">
              {site.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {site.description}
            </p>

            <a
              href={site.live}
              target="_blank"
              className="text-blue-600 underline"
            >
              Visit Website
            </a>

          </div>
        ))}

      </div>

    </section>
  )
}