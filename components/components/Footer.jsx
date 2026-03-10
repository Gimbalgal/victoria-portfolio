export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 border-t">

      <p>
        © {new Date().getFullYear()} Victoria Augustine Ishabo
      </p>

      <p className="text-sm">
        Built with Next.js
      </p>

    </footer>
  )
}