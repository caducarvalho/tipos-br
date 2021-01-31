import styled from 'styled-components';

const FooterBox = styled.footer`
  margin: auto 0 0;
  padding: 40px 10px 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.link};
  text-align: center;

  p {
    margin: 0;
  }
`;

export default FooterBox;
