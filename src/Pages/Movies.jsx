import { getSerchByQuery } from 'components/API/API';
import GalleryMovies from 'components/GalleryMovies/GalleryMovies';
import Header from 'components/Header/Header';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function serchByQuery() {
      const response = await getSerchByQuery(query).then(result => result.data);
      setMoviesData(response.results);
    }
    serchByQuery();
  }, [query]);

  function getSerchFilmsByQuery(query) {
    setQuery(query);
  }

  return (
    <>
      <Header />
      <SearchForm onFormSabmit={getSerchFilmsByQuery} />
      <GalleryMovies data={moviesData} />
    </>
  );
};

export default Movies;
