import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users.operations';
import { selectUsers } from 'redux/users/users.selector';

const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <>
      <Button text="Show Users" clickHandler={handleClick} />
      {users.length > 0 && <UsersList />}
    </>
  );
};

export default UsersPage;
