function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-900 py-5">
      <p className="mb-2 flex flex-row text-white">
        Made with <img className="h-5 w-auto" src="/heart.svg"></img> by McQeems
      </p>
      <p className="text-white">&copy; {new Date().getFullYear()} Pokedex</p>
    </footer>
  );
}

export default Footer;
