import { getSerchByQuery } from 'components/API/API';
import GalleryMovies from 'components/GalleryMovies/GalleryMovies';
import Header from 'components/Header/Header';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function serchByQuery() {
      const response = await getSerchByQuery(query).then(result => result.data);
      setMoviesData(response.results);
    }
    serchByQuery();
  }, [query]);

  function getSerchFilmsByQuery(query) {
    setSearchParams(query !== '' ? { query: query } : {});
  }

  return (
    <>
      <Header />
      <SearchForm onFormSabmit={getSerchFilmsByQuery} />
      {query && <GalleryMovies data={moviesData} />}
    </>
  );
};

export default Movies;
