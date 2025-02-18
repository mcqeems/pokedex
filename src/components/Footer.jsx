function Footer() {
  return (
    <footer className="my-12 flex flex-col items-center justify-center leading-5 md:my-0">
      <p className="mb-2 flex flex-row text-white">
        Made with <img className="h-5 w-auto" src="/heart.svg"></img> by McQeems
      </p>
      <p className="text-white">&copy; {new Date().getFullYear()} Pokedex</p>
    </footer>
  );
}

export default Footer;
