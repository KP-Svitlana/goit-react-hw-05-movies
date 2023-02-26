import AddInfo from 'components/AddInfo/AddInfo';
import MovieDitails from 'components/MovieDitails/MovieDitails';
import { Outlet } from 'react-router-dom';

const MoviesDitails = () => {
  return (
    <>
      <MovieDitails />
      <AddInfo />
      <Outlet />
    </>
  );
};

export default MoviesDitails;
