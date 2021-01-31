import styled from 'styled-components';

const Grid = styled.section`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  @media screen and (max-width: 519px) {
    flex-direction: column;
  }
`;

Grid.Menu = styled.div`
  flex: 0 0 200px;
  margin-right: 20px;

  @media screen and (max-width: 519px) {
    flex-basis: auto;
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

Grid.Content = styled.div`
  width: 100%;
  flex: 0 1 auto;
`;

export default Grid;
