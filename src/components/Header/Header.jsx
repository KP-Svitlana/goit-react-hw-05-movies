import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.btb__wrap}>
      <button className={css.btn}>Home</button>
      <button className={css.btn}>Movies</button>
    </div>
  );
};

export default Header;
