import { Link, useLocation } from 'react-router-dom';
import css from './AddInfo.module.css';

const AddInfo = () => {
  const location = useLocation();
  return (
    <section className={css.addInfo}>
      <h3 className={css.addInfo__title}> Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default AddInfo;
