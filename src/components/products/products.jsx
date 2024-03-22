import styles from "./products.module.css";
const Products = () => {
  return (
    <div>
      <div className={styles.products_nav}>
        <div className={styles.items}>2345items</div>
        <div className={styles.show_filter}>SHOW FILTER</div>
        <div className={styles.recom}>RECOMMENDED</div>
      </div>
      <div className={styles.section}>
        <div className={styles.filter}>filtor div on left</div>
        <div className={styles.products}>products div on right</div>
      </div>
    </div>
  );
};

export default Products;
