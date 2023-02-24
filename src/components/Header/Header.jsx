import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.header__wrap}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : css.header__link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? css.active : css.header__link)}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
