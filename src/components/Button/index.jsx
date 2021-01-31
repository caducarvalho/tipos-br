import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: none;
  padding: 9px;
  font-size: 0.9rem;
  font-family: "Tomorrow", sans-serif;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 8px 8px 0 rgba(0,0,0,0.2);
    transform: translate(-4px, -4px);
  }

  &:disabled {
    box-shadow: none;
    transform: none;
    background: ${({ theme }) => theme.colors.border};
    opacity: 0.6;
  }
`;

export default Button;
