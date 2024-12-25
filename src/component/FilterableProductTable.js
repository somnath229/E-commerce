import React from "react";
import { useState } from "react";
import Search from "./Search";
import ListItem from "./ListItem";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleInStockChange = (e) => {
    setInStockOnly(e.target.checked);
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const stockMatch = inStockOnly ? product.stocked : true;
    return nameMatch && stockMatch;
  });

  return (
    <div>
      <Search
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ListItem products={filteredProducts} />
    </div>
  );
}
const products = [
  {
    category: "Winter",
    price: "$1",
    stocked: true,
    name: "Denim",
    id: 1,
    src: "https://marketplace.canva.com/EAGAhr-OOqE/1/0/1600w/canva-neutral-modern-baby-clothing-instagram-post-cE6EmzWjCjg.jpg",
  },
  {
    category: "Summer",
    price: "$1",
    stocked: true,
    name: "Shirts",
    id: 2,
    src: "https://marketplace.canva.com/EAGAhr-OOqE/1/0/1600w/canva-neutral-modern-baby-clothing-instagram-post-cE6EmzWjCjg.jpg",
  },
  {
    category: "Winter",
    price: "$2",
    stocked: false,
    name: "Blazers",
    id: 3,
    src: "https://marketplace.canva.com/EAGAhr-OOqE/1/0/1600w/canva-neutral-modern-baby-clothing-instagram-post-cE6EmzWjCjg.jpg",
  },
  {
    category: "Summer",
    price: "$2",
    stocked: true,
    name: "Shorts",
    id: 4,
    src: "https://marketplace.canva.com/EAGAhr-OOqE/1/0/1600w/canva-neutral-modern-baby-clothing-instagram-post-cE6EmzWjCjg.jpg",
  },
  {
    category: "Moonsoon",
    price: "$4",
    stocked: false,
    name: "Umbrela",
    id: 5,
    src: "https://marketplace.canva.com/EAGAhr-OOqE/1/0/1600w/canva-neutral-modern-baby-clothing-instagram-post-cE6EmzWjCjg.jpg",
  },
  {
    category: "Casual",
    price: "$1",
    stocked: true,
    name: "Pant",
    id: 6,
    src: "https://marketplace.canva.com/EAGAhr-OOqE/1/0/1600w/canva-neutral-modern-baby-clothing-instagram-post-cE6EmzWjCjg.jpg",
  },
];

export default function App() {
  return <FilterableProductTable products={products} />;
}
