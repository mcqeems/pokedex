import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="fade-in-scale dm-sans-thin mx-auto mt-8 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg md:max-w-xl">
      <div className="relative container overflow-visible">
        <div className="flex rounded-lg border border-gray-300 p-4 shadow-md">
          {/* <!-- Left Column --> */}
          <div className="my-auto w-1/2 pr-4">
            <a
              href={`https://pokemondb.net/pokedex/${pokemon.name}`}
              target="_blank"
              className="mb-2 text-3xl font-bold capitalize underline"
            >
              {pokemon.name}
            </a>
            <p className="mb-2 text-gray-700">Id: {pokemon.id}</p>
            <p className="mb-2 text-gray-700">
              Height: {pokemon.height / 10} m
            </p>
            <p className="mb-2 text-gray-700">
              Weight: {pokemon.weight / 10} kg
            </p>

            {/* Kemampuan Pokémon */}
            <div className="mt-2 flex space-x-2 text-gray-700">
              <strong className="mb-2">Abilities:</strong>
              <ul className="mt-1 list-inside list-disc">
                {pokemon.abilities.map((ability, index) => (
                  <li key={index} className="capitalize">
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-2 text-gray-700">Types:</p>
            {/* <!-- Type Boxes --> */}
            <div className="mt-2 flex space-x-2">
              <ul className="mt-1 flex justify-center space-x-2">
                {pokemon.types.map((type, index) => (
                  <li
                    key={index}
                    className={`rounded px-2 py-1 capitalize ${
                      type.type.name === "electric"
                        ? "bg-yellow-300"
                        : type.type.name === "fire"
                          ? "bg-red-300"
                          : type.type.name === "water"
                            ? "bg-blue-300"
                            : type.type.name === "grass"
                              ? "bg-green-300"
                              : type.type.name === "poison"
                                ? "bg-purple-300"
                                : type.type.name === "bug"
                                  ? "bg-emerald-500"
                                  : type.type.name === "flying"
                                    ? "bg-sky-200"
                                    : type.type.name === "normal"
                                      ? "bg-gray-300"
                                      : type.type.name === "fighting"
                                        ? "bg-orange-300"
                                        : type.type.name === "ground"
                                          ? "bg-teal-600"
                                          : type.type.name === "ghost"
                                            ? "bg-blue-700"
                                            : type.type.name === "steel"
                                              ? "bg-slate-400"
                                              : type.type.name === "dragon"
                                                ? "bg-amber-500"
                                                : "bg-gray-200"
                    }`}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div className="w-1/2 pl-4">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={pokemon.name}
              className="h-70 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
