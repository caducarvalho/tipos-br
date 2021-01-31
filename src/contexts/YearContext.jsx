import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import YearReducer from '../reducers/YearReducer';
import db from '../../db.json';

const initialValue = {
  year: db.sheets[0],
  years: db.sheets,
};

const YearContext = createContext();

const YearProvider = ({ children }) => {
  const [state, dispatch] = useReducer(YearReducer, initialValue);

  const handleYear = (year) => dispatch({ type: 'CHANGE_YEAR', year });

  const { year, years } = state;

  return (
    <YearContext.Provider value={{ year, years, handleYear }}>
      {children}
    </YearContext.Provider>
  );
};

YearProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default YearContext;

export {
  YearProvider,
};
