import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/users.operations';

const initState = {
  name: '',
  phone: '',
  email: '',
  avatar: '',
  pet: '',
};

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

export const AddUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, reducerDispatch] = useReducer(formReducer, initState);

  const { name, phone, email, avatar, pet } = state;

  const handleChange = ({ target: { name, value } }) => {
    reducerDispatch({ type: name, payload: value });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const user = await dispatch(addUser(state)).unwrap();
    user && navigate(`/users/${user.id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        <span>Phone</span>
        <input type="tel" name="phone" value={phone} onChange={handleChange} />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Avatar</span>
        <input
          type="url"
          name="avatar"
          value={avatar}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Pet</span>
        <input type="text" name="pet" value={pet} onChange={handleChange} />
      </label>
      <button>Add User</button>
    </form>
  );
};
