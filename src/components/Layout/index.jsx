import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <Container className="flex-grow-1 my-5">
        <Outlet />
      </Container>
      
      <Footer />
    </div>
  );
};

export default Layout;
