import styled from 'styled-components';

export const Button = styled.button`
  color: #333;
  background-color: white;
  width: 25ch;
  height: 5ch;
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
