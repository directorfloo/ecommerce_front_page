import React from "react";
import { Link, useNavigate } from "react-router";
import { useGetAllProductsQuery } from "../apis/productApi";
import styles from "./Product.module.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = () => {
  const { data } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    navigate("/cart");            
  };

  return (
    <>
      <div className={styles.navBar}>
        <section className={styles.headLine}></section>

        <section className={styles.image}>
          <img src="/images/mama.jpg" alt="headline" />
        </section>

        <div className={styles.searchContainer}>
          <FaSearch className={styles.icon} />
          <input
            className={styles.search}
            type="text"
            placeholder="Search products, brands and categories"
          />
          <button className={styles.searchbtn}>Search</button>
        </div>

        <div className={styles.authLinks}>
          <Link to="/register" className={styles.signUpLink}>
            Sign Up
          </Link>

          <Link to="/login" className={styles.signInButton}>
            Log In
          </Link>

          <div className={styles.carting}>
            <Link to="/cart" className={styles.cartLink}>
              <FaShoppingCart className={styles.cartIcon} />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className={styles.productContainer}>
        {data?.products?.map((product) => (
          <div key={product.id} className={styles.generalProduct}>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <p className={styles.price}>${product.price}</p>

            <button
              className={styles.buyBtn}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
