import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  width: 300px;
  height: 200px;
`;

export const StyledButton = styled.button`
  border: none;
`;
