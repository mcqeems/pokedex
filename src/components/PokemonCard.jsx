import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="dm-sans-thin mx-auto mt-4 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg md:max-w-xl">
      <div className="container">
        <div className="flex rounded-lg border border-gray-300 p-4 shadow-md">
          {/* <!-- Left Column --> */}
          <div className="w-1/2 pr-4">
            <h2 className="mb-2 text-xl font-bold capitalize">
              Name: {pokemon.name}
            </h2>
            <p className="mb-2 text-gray-700">Id: {pokemon.id}</p>
            <p className="mb-2 text-gray-700">
              Height: {pokemon.height / 10} m
            </p>
            <p className="mb-2 text-gray-700">
              Weight: {pokemon.weight / 10} kg
            </p>
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
                                      : "bg-gray-300"
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
              className="h-100 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    // { <img
    //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
    //   alt={pokemon.name}
    //   className="h-100 w-auto object-contain"
    // />
    // <div className="p-4">
    //   <h2 className="text-center text-xl font-bold capitalize">
    //     {pokemon.name}
    //   </h2>
    //   <p>
    //     <strong>ID:</strong> {pokemon.id}
    //   </p>
    //   <p>
    //     <strong>Height:</strong> {pokemon.height / 10} m
    //   </p>
    //   <p>
    //     <strong>Weight:</strong> {pokemon.weight / 10} kg
    //   </p>

    //   <strong>Types:</strong>
    //   <ul className="mt-1 flex justify-center space-x-2">
    //     {pokemon.types.map((type, index) => (
    //       <li
    //         key={index}
    //         className="rounded bg-gray-200 px-2 py-1 capitalize"
    //       >
    //         {type.type.name}
    //       </li>
    //     ))}
    //   </ul>
    // </div> */}
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
