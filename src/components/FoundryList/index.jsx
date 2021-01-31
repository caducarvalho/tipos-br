import React from 'react';
import PropTypes from 'prop-types';
import FoundryListBox from './style';
import Foundry from '../Foundry';
import checkNull from '../../resources/check-null';

const FoundryList = ({ data }) => {
  const filteredData = data.valueRanges[0].values;

  return (
    <FoundryListBox>
      {filteredData.map((element) => (
        (checkNull(element[0]) && element[0] !== 'Foundry')
          && (
            <Foundry
              key={element[0]}
              foundry={checkNull(element[0]) ? element[0] : ''}
              link={checkNull(element[1]) ? element[1] : ''}
              founding={checkNull(element[2]) ? element[2] : ''}
              location={checkNull(element[3]) ? element[3] : ''}
              staff={checkNull(element[4]) ? element[4] : ''}
            />
          )
      ))}
    </FoundryListBox>
  );
};

FoundryList.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,

};

export default FoundryList;
