import { getSerchById } from 'components/API/API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import css from './MovieDitails.module.css';

const IMB_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDitails = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getSerchById(id).then(result => setMovieData(result.data));
  }, [id]);

  const { title, poster_path, overview, genres, vote_average } = movieData;
  // console.log(location.state.from);

  return (
    <section className={css.ditails}>
      <Link to={location.state?.from ?? '/'}>
        <button className={css.ditails__btn} type="button">
          Go Back
        </button>
      </Link>
      <div className={css.wrap}>
        <img
          className={css.ditails__img}
          src={IMB_BASE_URL + poster_path}
          alt={title}
        />
        <div className={css.ditails__wrap}>
          <h1 className={css.ditails__title}>{title}</h1>
          <p className={css.ditails__text}>User Score: {vote_average} </p>
          <h2 className={css.ditails__afterTitle}>Overview</h2>
          <p className={css.ditails__text}>{overview}</p>
          <h2 className={css.ditails__afterTitle}>Genres</h2>
          <p className={css.ditails__text}>
            {genres ? genres.map(el => el.name).join(' ') : ''}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieDitails;
