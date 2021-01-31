import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontBox from './style';
import checkNull from '../../resources/check-null';
import formatLink from '../../resources/format-link';
import Button from '../Button';

const Font = ({
  day,
  month,
  fontName,
  fontCount,
  foundry,
  author,
  link,
  altLink,
  foundryLink,
  year,
}) => {
  const fontDate = new Date(year, month, day);

  return (
    <FontBox>
      <FontBox.Title>{fontName}</FontBox.Title>
      <FontBox.Author>{`por ${author}`}</FontBox.Author>

      <FontBox.Image src="/dummy.svg" alt={`Amostra da fonte ${fontName}`} />

      <FontBox.Attributes>
        <li>
          <span className="label">Lançamento</span>
          <span className="value">{moment(fontDate).format('DD/MM/YYYY')}</span>
        </li>

        {checkNull(foundry)
          && (
            <li>
              <span className="label">Foundry</span>
              <span className="value">
                {foundryLink
                  ? <a href={formatLink(foundryLink)} target="_blank" rel="noopener noreferrer">{foundry}</a>
                  : foundry}
              </span>
            </li>
          )}

        <li>
          <span className="label">Tamanho</span>
          <span className="value">{parseInt(fontCount, 10) > 1 ? `${fontCount} fontes` : '1 fonte'}</span>
        </li>
      </FontBox.Attributes>

      <FontBox.Actions>
        <li><Button as="a" href={link} target="_blank" rel="noopener noreferrer">Link para fonte</Button></li>
        {altLink && <li><a href={altLink} target="_blank" rel="noopener noreferrer">Mais informações</a></li>}
      </FontBox.Actions>
    </FontBox>
  );
};

Font.defaultProps = {
  foundry: undefined,
  link: undefined,
  altLink: undefined,
  foundryLink: undefined,
};

Font.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  fontName: PropTypes.string.isRequired,
  fontCount: PropTypes.string.isRequired,
  foundry: PropTypes.string,
  author: PropTypes.string.isRequired,
  link: PropTypes.string,
  altLink: PropTypes.string,
  foundryLink: PropTypes.string,
  year: PropTypes.string.isRequired,
};

export default Font;
