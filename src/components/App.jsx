import { Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import Home from '../Pages/Home';
import Movies from 'Pages/Movies';

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
};
