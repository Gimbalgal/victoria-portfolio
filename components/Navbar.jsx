import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center gap-3">
        <Image 
          src="/images/myProfile.png" 
          alt="Victoria" 
          width={40} 
          height={40}
          className="rounded-full"
        />
        <h1 className="font-bold text-xl">Victoria</h1>
      </div>

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