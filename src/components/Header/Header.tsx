import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const isCharacterPage = useLocation().pathname === "/character";

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div
          className={
            isCharacterPage
              ? `${classes.nav__item} ${classes["nav__item--active"]} `
              : classes.nav__item
          }
        >
          <Link to="/character">Персонаж</Link>
        </div>
        <div
          className={
            !isCharacterPage
              ? `${classes.nav__item} ${classes["nav__item--active"]} `
              : classes.nav__item
          }
        >
          <Link to="/fight"> Битва</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
