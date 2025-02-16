import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="mx-auto mt-4 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg md:max-w-sm">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
        className="h-48 w-full object-contain"
      />
      <div className="p-4">
        <h2 className="text-center text-xl font-bold capitalize">
          {pokemon.name}
        </h2>
        <p>
          <strong>ID:</strong> {pokemon.id}
        </p>
        <p>
          <strong>Height:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight / 10} kg
        </p>

        <strong>Types:</strong>
        <ul className="mt-1 flex justify-center space-x-2">
          {pokemon.types.map((type, index) => (
            <li
              key={index}
              className="rounded bg-gray-200 px-2 py-1 capitalize"
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
