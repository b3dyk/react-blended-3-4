import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { fetchUsers } from 'redux/users/users.operations';
import { selectUsers } from 'redux/users/users.selector';

const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <>
      <Button text="Show Users" clickHandler={handleClick} />
      {users.length > 0 && (
        <>
          <UsersList />
          <Link to="add" state={{ from: location }}>
            Add User
          </Link>
        </>
      )}
    </>
  );
};

export default UsersPage;
