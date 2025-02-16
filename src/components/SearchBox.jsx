import styled from "styled-components";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Input = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions from PokeAPI
  useEffect(() => {
    if (query.length > 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.results
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(query.toLowerCase()),
            )
            .map((pokemon) => pokemon.name);
          setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
        });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Handle suggestion selection
  const handleSuggestionClick = (name) => {
    setQuery(name);
    setSuggestions([]);
    onSearch(name); // Trigger parent callback
  };

  return (
    <>
      <StyledWrapper>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="text"
          placeholder="Find your Pokemon!"
          className="input dm-sans-medium mt-5 md:mt-20 md:scale-130"
        />
      </StyledWrapper>

      {suggestions.length > 0 && (
        <ul className="dm-sans-thin absolute z-10 mb-[-260px] max-h-20 w-[200px] overflow-hidden rounded-2xl bg-white/50 shadow-lg transition-all delay-50 duration-150 ease-in-out hover:w-[240px] hover:scale-105 hover:bg-white/80 md:mb-[-420px]">
          {suggestions.map((name, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(name)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const StyledWrapper = styled.div`
  .input[type="text"] {
    display: block;
    color: rgb(34, 34, 34);
    background: linear-gradient(
      142.99deg,
      rgba(217, 217, 217, 0.63) 15.53%,
      rgba(243, 243, 243, 0.63) 88.19%
    );
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
    border-color: rgba(7, 4, 14, 0);
    border-radius: 50px;
    block-size: 50px;
    padding: 18px 15px;
    outline: none;
    text-align: center;
    width: 200px;
    transition: 0.5s;
  }

  .input[type="text"]:hover {
    width: 240px;
  }

  .input[type="text"]:focus {
    width: 280px;
  }
`;

Input.propTypes = {
  onSearch: PropTypes.func,
};

export default Input;
