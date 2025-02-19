// import backgroundImage from "../assets/backgroundhome.png";
import { useState } from "react";
import Waves from "../components/Waves";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
import SearchBox from "../components/SearchBox";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Fetch Pokémon details when user selects a Pokémon
  const handleSearch = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedPokemon({
          id: data.id,
          name: data.name,
          height: data.height || 0,
          weight: data.weight || 0,
          types: data.types,
          abilities: data.abilities,
        });
      })
      .catch((err) => {
        console.error("Error fetching Pokémon:", err);
        alert("Pokémon not found!");
      });
  };

  return (
    <>
      <div className="relative h-100 w-full bg-gradient-to-t from-gray-50 to-gray-300 md:h-150">
        <Waves className="z-0 h-100 w-full md:h-150"></Waves>
        <div className="relative z-10 flex h-full flex-col flex-wrap items-center justify-center px-10 pt-20">
          <BlurText
            className="dm-sans-bold justify-center text-5xl text-red-500 drop-shadow-md md:text-8xl"
            text="Welcome to Pokédex"
          ></BlurText>
          <ShinyText
            className="dm-sans-bold justify-center"
            text="The ultimate Pokemon Database"
          ></ShinyText>
          <SearchBox onSearch={handleSearch}></SearchBox>
        </div>
        {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
      </div>
      <div className="h-100 w-full min-w-full bg-red-500"></div>
    </>
  );
}

export default Home;
