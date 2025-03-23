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

  // Handle input change and selection from datalist
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setQuery(newValue);

    // Check if the value matches one of our suggestions (user selected from datalist)
    if (suggestions.includes(newValue)) {
      onSearch(newValue);
    }
  };

  return (
    <>
      <StyledWrapper>
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(query);
              }
            }}
            name="text"
            list="pokemon-suggestions"
            placeholder="Search Pokemon"
            className="input fade-in-blur-long dm-sans-medium mt-5 pr-12 md:mt-20 md:scale-130"
          />
          <button
            onClick={() => {
              if (query.trim()) {
                onSearch(query);
              }
            }}
            className="fade-in-blur-long absolute right-[-20px] mt-5 cursor-pointer rounded-full bg-red-500 p-1.5 text-white shadow-sm transition-all hover:bg-red-600 md:mt-20 md:scale-130"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <datalist id="pokemon-suggestions">
          {suggestions.map((name, index) => (
            <option key={index} value={name} />
          ))}
        </datalist>
      </StyledWrapper>
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
    width: 250px;
    transition: 0.5s;
  }

  .input[type="text"]:hover {
    width: 280px;
  }

  .input[type="text"]:focus {
    width: 300px;
  }
`;

Input.propTypes = {
  onSearch: PropTypes.func,
};

export default Input;
