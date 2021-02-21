import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const MyGifApp = () => {
  const [categories, setCategories] = useState(["Deku"]);

  return (
    <div className="my-gif-app">
      <div className="header">
        <h2>My Gif App</h2>
        <AddCategory setCategories={setCategories} />
      </div>
      <hr />
      <div className="content">
        {categories.map(category => (
         <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MyGifApp;
