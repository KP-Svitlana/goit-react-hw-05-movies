import { Link } from 'react-router-dom';
import css from './GalleryMovies.module.css';

const IMB_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const GalleryMovies = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className={css.gallery__list}>
        {data.map(({ poster_path, id, original_title, title }) => {
          return (
            <li key={id} className={css.gallery__item}>
              <Link className={css.gallery__link}>
                <img
                  src={IMB_BASE_URL + poster_path}
                  alt={original_title}
                  className={css.gallery__img}
                />
                <p className={css.gallery__name}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GalleryMovies;
