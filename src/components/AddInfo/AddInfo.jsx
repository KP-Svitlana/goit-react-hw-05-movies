import { Link } from 'react-router-dom';
import css from './AddInfo.module.css';

const AddInfo = () => {
  return (
    <section className={css.addInfo}>
      <h3 className={css.addInfo__title}> Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </section>
  );
};

export default AddInfo;
