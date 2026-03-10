export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="font-bold text-xl">Victoria</h1>

      <ul className="flex gap-6">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#wordpress">WordPress</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}