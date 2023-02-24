import css from './TrendingMoviesList.module.css';
import { useState, useEffect } from 'react';
import { trendingMovieToday } from 'components/API/API';
import { Link } from 'react-router-dom';

const IMB_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const TrendingMoviesList = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const response = await trendingMovieToday().then(result => result.data);
      setTrendingList(response.results);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={css.trendingList__title}>Trending today</h1>
      <ul className={css.trendingList__list}>
        {trendingList.map(({ poster_path, id, original_title, title }) => {
          return (
            <li key={id} className={css.trendingList__item}>
              <Link className={css.trendingList__link}>
                <img
                  src={IMB_BASE_URL + poster_path}
                  alt={original_title}
                  className={css.trendingList__img}
                />
                <p className={css.trendingList__name}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
