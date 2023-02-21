import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { editUser } from 'redux/users/users.operations';

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const UsersUpdatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;
  const initState = {
    ...location.state,
  };

  const [state, reducerDispatch] = useReducer(formReducer, initState);

  const handleChange = ({ target: { name, value } }) => {
    reducerDispatch({ type: name, payload: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(editUser({ ...state, id }));
    navigate(`/users/${id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Avatar</span>
        <input
          type="url"
          name="avatar"
          value={state.avatar}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Pet</span>
        <input
          type="text"
          name="pet"
          value={state.pet}
          onChange={handleChange}
        />
      </label>
      <button>Update User</button>
      <Link to={`/users/${id}`}>Cancel</Link>
    </form>
  );
};

export default UsersUpdatePage;
