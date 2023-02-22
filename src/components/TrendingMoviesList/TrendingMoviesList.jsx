import css from './TrendingMoviesList.module.css';
import { useState, useEffect } from 'react';
import { trendingMovieToday } from 'components/API/API';

const TrendingMoviesList = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const response = await trendingMovieToday().then(result => result.data);
      console.log(response);
      setTrendingList(response.results);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={css.trendingList__title}>Trending today</h1>
      <ul className={css.trendingList__list}>
        {trendingList.map(el => {
          return (
            <li key={el.id} className={css.trendingList__item}>
              {el.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
