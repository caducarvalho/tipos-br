import React from 'react';
import PropTypes from 'prop-types';
import FoundryBox from './style';
import Button from '../Button';
import formatLink from '../../resources/format-link';

const Foundry = ({
  foundry,
  link,
  founding,
  location,
  staff,
}) => (
  <FoundryBox>
    <FoundryBox.Title>{foundry}</FoundryBox.Title>

    <FoundryBox.Attributes>
      {founding && (
        <li>
          <span className="label">Fundação</span>
          <span className="value">{founding}</span>
        </li>
      )}
      {location && (
        <li>
          <span className="label">Sediada em</span>
          <span className="value">{location}</span>
        </li>
      )}
      {staff && (
        <li>
          <span className="label">Equipe</span>
          <span className="value">{parseInt(staff, 10) > 1 ? `${staff} pessoas` : '1 pessoa'}</span>
        </li>
      )}
    </FoundryBox.Attributes>

    <FoundryBox.Actions>
      <Button as="a" href={formatLink(link)} target="_blank" rel="noopener noreferrer">Ver foundry</Button>
    </FoundryBox.Actions>
  </FoundryBox>
);

Foundry.defaultProps = {
  founding: undefined,
  location: undefined,
  staff: undefined,
};

Foundry.propTypes = {
  foundry: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  founding: PropTypes.string,
  location: PropTypes.string,
  staff: PropTypes.string,
};

export default Foundry;
