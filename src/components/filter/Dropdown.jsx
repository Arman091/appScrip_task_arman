import React, { useState } from "react";
import Image from "next/image";
import "./dropdown.css";

const DropdownMenu = ({ title, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    let updatedOptions = [...selectedOptions];
  
    // Toggle the selected option
    if (updatedOptions.includes(value)) {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    } else {
      updatedOptions.push(value);
    }
  
    setSelectedOptions(updatedOptions);
  
    // Pass back selected categories to parent component
    onCategorySelect(value);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleMenu}>
        <div>
          <p> {title}</p>
          <p className="all_text">All</p>
        </div>
        <div>
          <Image src="/arrow-down.svg" alt="error" width={24} height={24} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <label>
            <span>Unselect All</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="men"
              checked={selectedOptions.includes("men")}
              onChange={handleOptionChange}
            />
            <span>MEN</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="women"
              checked={selectedOptions.includes("women")}
              onChange={handleOptionChange}
            />
            <span>WOMEN</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="baby"
              checked={selectedOptions.includes("baby")}
              onChange={handleOptionChange}
            />
            <span>Baby & Kids</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
