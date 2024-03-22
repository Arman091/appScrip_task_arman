
'use client';

import styles from "./products.module.css";
import Image from "next/image";
import ProductItem from "./ProductItem";
import Filter from "../filter/Filter";
import { useState } from "react";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const products = [
    {
      id: 1,
      name: "T-shirt",
      description: "Comfortable cotton t-shirt",
      image: "/tshirt.jpg",
      category: "Clothes",
      price: 15,
    },
    {
      id: 2,
      name: "Jeans",
      description: "Classic denim jeans",
      image: "/jeans.jpg",
      category: "Clothes",
      price: 30,
    },
    {
      id: 3,
      name: "Sneakers",
      description: "Stylish sneakers",
      image: "/sneakers.jpg",
      category: "Shoes",
      price: 50,
    },
    {
      id: 4,
      name: "Dress",
      description: "Elegant black dress",
      image: "/dress.jpg",
      category: "Clothes",
      price: 45,
    },
    {
      id: 5,
      name: "Hoodie",
      description: "Warm hoodie for chilly days",
      image: "/hoodie.jpg",
      category: "Clothes",
      price: 25,
    },
    {
      id: 6,
      name: "Skirt",
      description: "Floral-printed skirt",
      image: "/skirt.jpg",
      category: "Clothes",
      price: 35,
    },
    {
      id: 7,
      name: "Jacket",
      description: "Stylish jacket for all occasions",
      image: "/jacket.jpg",
      category: "Clothes",
      price: 55,
    },
    {
      id: 8,
      name: "Boots",
      description: "Leather boots for rugged terrain",
      image: "/boots.jpg",
      category: "Shoes",
      price: 60,
    },
    {
      id: 9,
      name: "Sweater",
      description: "Cozy knitted sweater",
      image: "/sweater.jpg",
      category: "Clothes",
      price: 40,
    },
    {
      id: 10,
      name: "Pants",
      description: "Casual pants for everyday wear",
      image: "/pants.jpg",
      category: "Clothes",
      price: 20,
    },
    {
      id: 11,
      name: "Blouse",
      description: "Chic blouse for formal occasions",
      image: "/blouse.jpg",
      category: "Clothes",
      price: 35,
    },
    {
      id: 12,
      name: "Shorts",
      description: "Comfortable shorts for summer",
      image: "/shorts.jpg",
      category: "Clothes",
      price: 18,
    },
  ];
  return (
    <div>
      <div className={styles.products_nav}>
        <div className={styles.items}>
          <div className={styles.number_item}>2345hdhbd</div>
          <div className={styles.show_filter} onClick={toggleFilter}>
            <Image src="/arrow-left.svg" alt="error" width={20} height={20} />
          {!isFilterOpen?<span>SHOW FILTER</span>:<span>HIDE FILTER</span>}  
          </div>
        </div>

        <div className={styles.recom}>
          <span>RECOMMENDED</span>
          <Image src="/arrow-down.svg" alt="error" width={20} height={20} />
        </div>
      </div>
      <div className={styles.section}>
        {isFilterOpen?<Filter isOpen={true}/>:''}
        
        <div className={styles.container}>
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
