import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { toggleMobMenu } from 'redux/global/global.slice';

export const MobMenu = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleMobMenu());
  };

  return (
    <>
      <Navigation />
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </>
  );
};
