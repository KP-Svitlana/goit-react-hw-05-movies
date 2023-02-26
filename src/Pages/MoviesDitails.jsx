import AddInfo from 'components/AddInfo/AddInfo';
import MovieDitails from 'components/MovieDitails/MovieDitails';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesDitails = () => {
  return (
    <>
      <MovieDitails />
      <AddInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDitails;
