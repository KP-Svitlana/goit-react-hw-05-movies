import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
