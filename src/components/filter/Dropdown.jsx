"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./dropdown.css";
const DropdownMenu = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    if (value === "all") {
      setSelectAll(!selectAll);
      setSelectedOptions(selectAll ? [] : ["men", "women", "baby"]);
    } else if (value === "unselectAll") {
      setSelectAll(false);
      setSelectedOptions([]);
    } else {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(
          selectedOptions.filter((option) => option !== value)
        );
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    }
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
