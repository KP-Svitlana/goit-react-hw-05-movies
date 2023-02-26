import { Link } from 'react-router-dom';
import css from './AddInfo.module.css';

const AddInfo = () => {
  return (
    <section className={css.addInfo}>
      <h3 className={css.addInfo__title}> Additional information</h3>
      <ul>
        <li>
          <Link>Cast</Link>
        </li>
        <li>
          <Link>Reviews</Link>
        </li>
      </ul>
    </section>
  );
};

export default AddInfo;
