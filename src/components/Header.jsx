import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-neutral-900 flex flex-col sm:flex-row sm:justify-between items-center px-6 py-4 sm:py-0 sm:h-[80px]">
      <h2 className="font-extrabold text-2xl sm:text-[30px] text-center sm:text-left">
        <span className="text-purple-800">Matheus</span> Degrande
      </h2>

      <nav className="mt-3 sm:mt-0 flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
        <Link to="/">
          <button className="font-extrabold text-white text-lg sm:text-xl hover:text-purple-400">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="font-extrabold text-white text-lg sm:text-xl hover:text-purple-400">
            Sobre
          </button>
        </Link>
        <Link to="/skills">
          <button className="font-extrabold text-white text-lg sm:text-xl hover:text-purple-400">
            Habilidades
          </button>
        </Link>
        <Link to="/projects">
          <button className="font-extrabold text-white text-lg sm:text-xl hover:text-purple-400">
            Projetos
          </button>
        </Link>
      </nav>
    </header>
  );
}
