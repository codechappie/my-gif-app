import React, { useState } from "react";
const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      setInputValue(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputValue.trim()){
       alert("llenar")
       return false
    }
    
    setCategories(categories => [...categories, inputValue])
    setInputValue('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="search-input" type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default AddCategory;
