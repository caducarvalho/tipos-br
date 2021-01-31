import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FontListBox from './style';
import Font from '../Font';
import YearContext from '../../contexts/YearContext';
import checkNull from '../../resources/check-null';

const FontList = ({ data }) => {
  const { year } = useContext(YearContext);
  const filteredData = data.valueRanges[0].values;

  return (
    <FontListBox>
      {filteredData.map((element) => (
        (!Number.isNaN(parseInt(element[0], 10)) && !Number.isNaN(parseInt(element[1], 10)))
          && (
            <Font
              key={`${element[1]}-${element[0]}`}
              day={checkNull(element[0]) ? element[0] : ''}
              month={checkNull(element[1]) ? element[1] : ''}
              fontName={checkNull(element[2]) ? element[2] : ''}
              fontCount={checkNull(element[3]) ? element[3] : ''}
              author={checkNull(element[4]) ? element[4] : ''}
              foundry={checkNull(element[5]) ? element[5] : undefined}
              foundryLink={checkNull(element[6]) ? element[6] : undefined}
              link={checkNull(element[7]) ? element[7] : undefined}
              altLink={checkNull(element[9]) ? element[9] : undefined}
              year={year}
            />
          )
      ))}
    </FontListBox>
  );
};

FontList.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,

};

export default FontList;
