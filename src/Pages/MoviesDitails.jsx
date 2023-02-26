import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDitails = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  useEffect(() => {}, []);

  return <>Movies ditails {id}</>;
};

export default MoviesDitails;
