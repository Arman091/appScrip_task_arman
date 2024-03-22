
import styles from './productItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
