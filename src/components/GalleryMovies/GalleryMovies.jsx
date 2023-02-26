import { Link, useLocation } from 'react-router-dom';
import css from './GalleryMovies.module.css';

const IMB_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const GalleryMovies = ({ data }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.gallery__list}>
        {data.map(({ poster_path, id, original_title, title }) => {
          return (
            <li key={id} className={css.gallery__item}>
              <Link
                to={`/movies/${id}`}
                className={css.gallery__link}
                state={{ from: location }}
              >
                <img
                  src={
                    poster_path !== null
                      ? IMB_BASE_URL + poster_path
                      : 'https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg'
                  }
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
