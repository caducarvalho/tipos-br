import React from 'react';
import FooterBox from './style';

const Footer = () => (
  <FooterBox>
    <p>
      O
      {' '}
      <a href="https://docs.google.com/spreadsheets/d/1ZagoadkjSUwl4feEDCm_XaBZJXmQuD98_KMiYUCHw44/" target="_blank" rel="noopener noreferrer">banco de dados</a>
      {' '}
      de tipogafias brasileiras é mantido e atualizado por
      {' '}
      <a href="https://twitter.com/henriquenardi" target="_blank" rel="noopener noreferrer">Henrique Nardi</a>
      , organizador do
      {' '}
      <a href="https://facebook.com/groups/tipocracia" target="_blank" rel="noopener noreferrer">Tipocracia</a>
      . Página desenvolvida por
      {' '}
      <a href="https://linktr.ee/caducarvalho" target="_blank" rel="noopener noreferrer">Cadu Carvalho</a>
      .
    </p>
  </FooterBox>
);

export default Footer;
