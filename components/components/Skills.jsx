export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Frontend
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Backend
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Tools & Platforms
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Figma</li>
            <li>WordPress</li>
            <li>WooCommerce</li>
            <li>GitHub</li>
            <li>Postman</li>
          </ul>
        </div>

      </div>

    </section>
  )
}