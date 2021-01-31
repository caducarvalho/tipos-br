import styled from 'styled-components';

const FontBox = styled.li`
  margin: 0;
  padding: 0 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
`;

FontBox.Title = styled.h2`
  font-family: "Fraunces", serif;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

FontBox.Author = styled.p`
  margin: 0 0 10px;
  padding: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.link};
`;

FontBox.Image = styled.img`
  display: block;
  width: 100%;
  margin: 0;
`;

FontBox.Attributes = styled.ul`
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

FontBox.Actions = styled.ul`
  margin: auto 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export default FontBox;
