import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchUserDetails } from 'redux/users/users.operations';
import { selectUserDetails } from 'redux/users/users.selector';

const UserDetailsPage = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUserDetails);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {user && (
        <>
          <Link to={location?.state?.from ?? '/'}> Go Back</Link>
          <img src={user.avatar} alt={user.name} width="150" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Pet: {user.pet}</p>
        </>
      )}
      <button type="button" onClick={() => setIsModalShown(true)}>
        Delete
      </button>
      <Link to={`/users/update/${id}`} state={user}>
        Update
      </Link>
      {isModalShown && <Modal clickClose={setIsModalShown} id={id} />}
    </>
  );
};

export default UserDetailsPage;
