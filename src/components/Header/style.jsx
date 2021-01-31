import styled from 'styled-components';

const HeaderBar = styled.div`
  background: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding: 0;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 519px) {
    justify-content: space-between;
  }
`;

HeaderBar.Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Fraunces', serif;
  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 1.8rem;
  font-variation-settings: 'opsz' 144, 'SOFT' 100;
  font-weight: 700;
  margin: 0;
  padding: 10px;
`;

HeaderBar.Nav = styled.nav`
  margin: 0 0 0 30px;
  padding: 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 519px) {
    margin: 0 10px 0 0;
  }
`;

HeaderBar.Toggler = styled.label`
  background: ${({ active, theme }) => (active ? theme.colors.secondary : theme.colors.background)};
  width: 40px;
  height: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  margin-right: 10px;
  transition: all 0.25s ease-in-out;
  position: relative;
  cursor: pointer;

  &:after {
    content: '☀';
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    display: block;
    width: 18px;
    height: 18px;
    top: 2px;
    left: ${({ active }) => (active ? '20px' : '2px')};
    text-align: center;
    font-size: 0.9rem;
    line-height: 18px;
    border-radius: 10px;
    position: absolute;
    transition: all 0.25s ease-in-out;
  }

  input {
    visibility: hidden;
  }
`;

HeaderBar.List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 5px;
  height: 60px;
  list-style: none;

  li {
    height: 50px;
    padding: 5px 0;
  }

  .active {
    padding-bottom: 0;
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  }

  a {
    display: block;
    padding: 5px;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default HeaderBar;
