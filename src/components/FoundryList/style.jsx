import styled from 'styled-components';

const FoundryListBox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template: auto / repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 40px 20px;
`;

export default FoundryListBox;
