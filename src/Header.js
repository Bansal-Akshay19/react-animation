import classes from "./Header.module.css";
import logo from "./image/logo.png";
const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes.menu}>
          <span>Product</span>
          <span>Our Story</span>
          <span>Resources</span>
        </div>
        <button className={classes.button}>Book a demo</button>
      </div>
    </>
  );
};

export default Header;
