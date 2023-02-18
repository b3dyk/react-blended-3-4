import { Navigation } from 'components/Navigation/Navigation';
import { Outlet, useParams } from 'react-router-dom';

const Layout = () => {
  const { id } = useParams();
  return (
    <>
      <header>{!id && <Navigation />}</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
