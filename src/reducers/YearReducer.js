const YearReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_YEAR':
      return { ...state, year: action.year };
    default:
      return state;
  }
};

export default YearReducer;
