import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const MyGifApp = () => {
  const [categories, setCategories] = useState(["Deku"]);
  
  return (
    <div>
      <h2>My Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(category => (
         <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default MyGifApp;
