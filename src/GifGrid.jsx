import React from "react";
import GifCard from "./GifCard";
import { useFetchGifs } from "./hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="category-container">
      <h3 className="category-title">{category}</h3>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div className="grid-items">
          {images.map((img) => (
            <GifCard key={img.id} {...img} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GifGrid;
