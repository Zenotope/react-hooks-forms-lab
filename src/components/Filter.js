import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  // const [searchQuery, setSearchQuery] = useState("")
  // const handleSearch= (e) => setSearchQuery(e.target.value)
  // const searchResults = 
    function handleSearchChange(event){
      onSearchChange(event.target.value)
    }

  return (
    <div className="Filter">
      <input onChange={handleSearchChange} value={search} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
