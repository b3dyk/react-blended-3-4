import { MobMenu } from 'components/MobMenu/MobMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { useMedia } from 'react-use';
import { selectMobMenuOpen } from 'redux/global/global.selector';
import { toggleMobMenu } from 'redux/global/global.slice';

const Layout = () => {
  const isModalOpen = useSelector(selectMobMenuOpen);
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 768px)');
  const { id } = useParams();

  const handleClick = () => {
    dispatch(toggleMobMenu());
  };
  return (
    <>
      <header>
        {!isMobile && !id && <Navigation />}
        {isMobile && <button onClick={handleClick}>Mob Menu</button>}
        {isModalOpen && <MobMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
