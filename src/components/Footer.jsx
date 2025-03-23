function Footer() {
  return (
    <footer className="mt-auto w-full bg-gray-900 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <p className="mb-2 flex items-center gap-2 text-white">
          Made with <img className="h-5 w-auto" src="/heart.svg" alt="heart" />{" "}
          by McQeems
        </p>
        <p className="text-white">&copy; {new Date().getFullYear()} Pokedex</p>
      </div>
    </footer>
  );
}

export default Footer;
