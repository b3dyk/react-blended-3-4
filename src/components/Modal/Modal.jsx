import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'redux/users/users.operations';
import { Backdrop, ModalWindow, StyledButton } from './Modal.styled';

export const Modal = ({ id, clickClose }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(id));
    navigate('/users');
  };
  return (
    <Backdrop>
      <ModalWindow>
        <h3>Are you sure?</h3>
        <StyledButton type="button" onClick={handleDelete}>
          Yes
        </StyledButton>
        <StyledButton type="button" onClick={() => clickClose(false)}>
          No
        </StyledButton>
      </ModalWindow>
    </Backdrop>
  );
};
