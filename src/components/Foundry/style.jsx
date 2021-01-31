import styled from 'styled-components';

const FoundryBox = styled.li`
  margin: 0;
  padding: 0 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
`;

FoundryBox.Title = styled.h2`
  font-family: "Fraunces", serif;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

FoundryBox.Attributes = styled.ul`
  margin: 10px 0;
  padding: 0;
  list-style: none;

  li {
    margin: 0 0 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .label {
    flex: 0 0 100px;
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.link};
    letter-spacing: 1px;

    &:after {
      content: ':';
    }
  }

  .value {
    flex: 0 0 calc(100% - 110px);
    margin: 0;
    padding: 0;
  }
`;

FoundryBox.Actions = styled.div`
  margin: auto 0 0;
  padding: 0;
  text-align: right;
`;

export default FoundryBox;
