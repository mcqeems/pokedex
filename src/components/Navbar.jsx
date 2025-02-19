import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Navbar */}
      <nav className="dm-sans-medium fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="transition delay-100 duration-100 ease-in-out hover:scale-110 hover:animate-spin"
            >
              <img className="h-8 w-8" src="/pokeball2.svg" alt="PokeDex"></img>
            </Link>
            <div className="dm-sans-super-bold text-xl font-bold text-red-500 transition delay-100 duration-100 ease-in-out hover:scale-110 hover:text-red-600">
              <Link to="/">Pokédex</Link>
            </div>
          </div>

          <button
            className={`${isMenuOpen ? "mr-5" : "md:hidden"} text-gray-700 hover:text-red-500 focus:outline-none`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Icon 3 Baris */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width="48px"
              height="48px"
            >
              <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z" />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } mt-2 w-1 bg-white md:hidden`}
          >
            <ul className="flex flex-col space-y-2 justify-self-end p-4">
              <li>
                <Link
                  to="/"
                  className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pokemons"
                  className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
                >
                  Pokemons
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Items */}
          <ul className="hidden space-x-4 md:flex">
            <li>
              <Link
                to="/"
                className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/pokemons"
                className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
              >
                Pokemons
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-black transition delay-100 duration-100 ease-in-out hover:text-red-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
