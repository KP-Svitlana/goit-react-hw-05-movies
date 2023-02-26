const { default: Header } = require('components/Header/Header');
const {
  default: MovieDitails,
} = require('components/MovieDitails/MovieDitails');

const MoviesDitails = () => {
  return (
    <>
      <Header />
      <MovieDitails />
    </>
  );
};

export default MoviesDitails;
