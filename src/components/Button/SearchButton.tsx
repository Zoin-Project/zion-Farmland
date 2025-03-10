import { useState } from "react";

const SearchButton = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="relative flex items-center w-[200px] h-10 px-3 bg-white rounded-[30px] transition-all duration-500 focus-within:rounded-[1px]">
      {/* Search Button */}
      <button type="submit" className="text-gray-500">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 h-full px-2 text-sm bg-transparent border-none focus:outline-none"
      />

      {/* Reset Button */}
      {inputValue && (
        <button
          type="reset"
          onClick={() => setInputValue("")}
          className="text-gray-500 transition-opacity opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 origin-center transition-transform duration-300 form-focus-within:scale-100"></div>
    </form>
  );
};

export default SearchButton;
