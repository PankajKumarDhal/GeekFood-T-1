import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.img}>
          <a href="/" >
            <img src="https://flowbite.com/docs/images/logo.svg" />
            
          </a>
          <span className={styles.logo}>GeekFoods</span>

          </div>
          
          
          <div className={styles.pages}>
            <div>Home</div>
            <div>Quote</div>
            <div>Resturant</div>
            <div>Foods</div>
            <div>Contact</div>
          </div>

          <div className={styles.click}>
            <button type="button" className="">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
