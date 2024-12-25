import React from "react";

function Search({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) {
  return (
    <form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "3rem auto",
          width: "70%",
        }}>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={onFilterTextChange}
          style={{
            width: "100%",
            margin: "1rem",
            padding: "1rem",
          }}
        />
        <div style={{fontSize:"1rem", fontWeight:"700"}}>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={onInStockChange}
          />{" "}
          Only show products in stock
        </div>
      </div>
    </form>
  );
}

export default Search;
