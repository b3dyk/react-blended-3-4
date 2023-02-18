import { Link, useLocation } from 'react-router-dom';

export const UserItem = ({ id, name }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={id} state={{ from: location }}>
        {name}
      </Link>
    </li>
  );
};
