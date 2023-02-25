import css from './TrendingMoviesList.module.css';
import { useState, useEffect } from 'react';
import { trendingMovieToday } from 'components/API/API';
import GalleryMovies from 'components/GalleryMovies/GalleryMovies';

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
      <GalleryMovies data={trendingList} />
    </>
  );
};

export default TrendingMoviesList;
