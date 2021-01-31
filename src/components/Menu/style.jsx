import styled from 'styled-components';

const MenuBar = styled.div`
  padding: 0;
  position: sticky;
  top: 81px;

  @media screen and (max-width: 519px) {
    position: static;
  }
`;

MenuBar.Title = styled.label`
  display: block;
  margin: 80px 0 10px;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.link};

  @media screen and (max-width: 519px) {
    margin: 0 0 10px;
  }
`;

MenuBar.Select = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 0;
  display: block;
  width: 100%;
  font-family: "Tomorrow", sans-serif;
  font-size: 1rem;
  background: transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj48cGF0aCBjbGFzcz0iYiIgZD0iTTcsMTJsNyw3bDcsLTdsLTEsLTFsLTYsNmwtNiwtNmwtMSwxeiIgZmlsbD0iIzMzMyIgLz48L3N2Zz4=") no-repeat scroll right center;
  appearance: none;
  cursor: pointer;
`;

export default MenuBar;
