import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 dm-sans-medium">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="transition delay-100 duration-100 hover:animate-spin ease-in-out hover:scale-110"
            >
              <img className="h-8 w-8" src="/pokeball2.svg" alt="PokeDex"></img>
            </Link>
            <div className="text-xl font-bold text-red-500 transition delay-100 duration-100 ease-in-out hover:scale-110 hover:text-red-600 dm-sans-super-bold">
              <Link to="/">Pokédex</Link>
            </div>
          </div>

          <button
            className="md:hidden block text-gray-700 hover:text-red-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Icon 3 Baris */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden bg-white w-1 mt-2`}
          >
            <ul className="flex flex-col justify-self-end space-y-2 p-4">
              <li>
                <Link
                  to="/"
                  className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/pokemons"
                  className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
                >
                  Pokemons
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/pokemons"
                className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
              >
                Pokemons
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black hover:text-red-600 transition delay-100 duration-100 ease-in-out"
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
