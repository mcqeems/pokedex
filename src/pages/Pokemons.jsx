import React, { useEffect, useState } from "react";

function Pokemons() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // State to track fade-out

  const typeColors = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    ice: "bg-cyan-300",
    fighting: "bg-red-700",
    poison: "bg-purple-600",
    ground: "bg-yellow-700",
    flying: "bg-sky-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-stone-600",
    ghost: "bg-indigo-800",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
  };

  useEffect(() => {
    // Fetch Pokémon data from the PokéAPI
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1302",
        ); // Fetch first 151 Pokémon (Kanto region)
        const data = await response.json();

        // Extract only the names from the results
        let names = data.results.map((pokemon) => pokemon.name);

        // Sort the names alphabetically
        names.sort((a, b) => a.localeCompare(b));

        // Update the state with sorted names
        setPokemonNames(names);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, []);

  // Function to fetch details of a specific Pokémon
  const fetchPokemonDetails = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      // Extract region from species URL
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();

      const region =
        speciesData.genera.find((genus) => genus.language.name === "en")
          ?.genus || "Unknown Region";

      // Prepare Pokémon details
      const details = {
        id: data.id,
        name: data.name,
        height: data.height / 10, // Convert decimeters to meters
        weight: data.weight / 10, // Convert hectograms to kilograms
        abilities: data.abilities.map((ability) => ability.ability.name),
        types: data.types.map((type) => type.type.name),
        region: region,
      };

      setSelectedPokemon(details);
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );

  // Handle modal close with fade-out animation
  const handleModalClose = () => {
    setIsFadingOut(true); // Start fade-out animation
    setTimeout(() => {
      setIsFadingOut(false); // Reset fade-out state
      setIsModalOpen(false); // Close the modal after animation completes
    }, 300); // Match this duration to your CSS animation duration
  };

  return (
    <>
      <div className="dm-sans-medium flex h-auto w-[90%] flex-col items-center justify-center justify-self-center bg-white px-3 pt-20 pb-5 md:flex-row md:px-10 md:py-30">
        <div className="fade-in-blur w-full">
          <ul className="flex justify-around border-b-2 border-b-red-500 md:flex-row">
            {alphabet.map((letter) => (
              <li className="mb-10" key={letter}>
                <a
                  className="block w-auto rounded bg-red-500 text-center text-sm text-white transition delay-50 duration-150 ease-in-out hover:bg-red-700 md:w-5 md:text-sm lg:w-8 lg:text-xl"
                  href={`#${letter}`}
                >
                  {letter}
                </a>{" "}
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-4xl">
            {pokemonNames.map((name, index) => {
              // Get the first letter of the current Pokémon name
              const currentLetter = name.charAt(0).toUpperCase();

              // Get the first letter of the previous Pokémon name (if exists)
              const previousLetter =
                index > 0
                  ? pokemonNames[index - 1].charAt(0).toUpperCase()
                  : null;

              // Check if the current letter is different from the previous one
              const isNewAlphabet = currentLetter !== previousLetter;

              return (
                <React.Fragment key={index}>
                  {/* Display a new <h1> for each new alphabet */}
                  {isNewAlphabet && (
                    <h1
                      className="mt-8 mb-4 text-4xl font-bold text-gray-800"
                      id={currentLetter}
                    >
                      {currentLetter}
                    </h1>
                  )}
                  {/* Display the Pokémon name */}
                  <div
                    className="mb-2 cursor-default rounded-lg bg-red-500 p-4 text-center font-medium text-white shadow-md transition-all delay-25 ease-in-out hover:bg-red-700 focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:outline-none"
                    onClick={() => fetchPokemonDetails(name)} // Open modal on click
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
                    {/* Capitalize the first letter */}
                  </div>
                </React.Fragment>
              );
            })}

            {/* Modal */}
            {isModalOpen && selectedPokemon && (
              <div
                className={`fade-in-scale-blur fixed inset-0 z-50 flex items-center justify-center bg-black/75 ${
                  isFadingOut ? "fade-out-scale-blur" : ""
                }`}
              >
                <div className="fade-in-scale relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                  <button
                    className="absolute top-2 right-2 text-4xl text-gray-600 transition duration-75 ease-in-out hover:text-gray-800"
                    onClick={handleModalClose} // Close modal
                  >
                    &times;
                  </button>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
                    alt={selectedPokemon.name}
                    className="mx-auto mb-5 h-70 w-auto object-contain"
                  />
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    {selectedPokemon.name.toUpperCase()}
                  </h2>
                  <p className="mb-2">
                    <strong>Id:</strong> {selectedPokemon.id}
                  </p>
                  <p className="mb-2">
                    <strong>Height:</strong> {selectedPokemon.height} m
                  </p>
                  <p className="mb-2">
                    <strong>Weight:</strong> {selectedPokemon.weight} kg
                  </p>
                  <p className="mb-2">
                    <strong>Region:</strong> {selectedPokemon.region}
                  </p>
                  <div className="mb-4 flex gap-2">
                    <p>
                      <strong>Types:</strong>
                    </p>
                    {selectedPokemon.types.map((type, index) => (
                      <span
                        key={index}
                        className={`rounded px-3 py-1 text-xs font-medium text-white ${typeColors[type] || "bg-gray-400"}`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <strong>Abilities:</strong>
                    <ul className="mb-2 list-disc pl-5">
                      {" "}
                      {selectedPokemon.abilities.map((ability, index) => (
                        <li className="capitalize" key={index}>
                          {ability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemons;
