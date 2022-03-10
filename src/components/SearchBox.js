import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2 m-6 text-center">
      <input
        className="p-3 text-sm myFontOrbitron border-2 rounded-lg border-gray-400 bg-gray-100 drop-shadow-lg"
        type="search"
        placeholder="Search Robots ..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
