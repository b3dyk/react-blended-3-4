import { UserItem } from 'components/UserItem/UserItem';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/users.selector';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  return (
    <ul>
      {users?.map(({ name, email, id }) => (
        <UserItem key={id} id={id} name={name} email={email} />
      ))}
    </ul>
  );
};
