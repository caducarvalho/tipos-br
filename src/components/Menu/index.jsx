import React, { useContext } from 'react';
import MenuBar from './style';
import YearContext from '../../contexts/YearContext';

const Menu = () => {
  const { year, years, handleYear } = useContext(YearContext);

  return (
    <MenuBar>
      <MenuBar.Title htmlFor="year">Selecione um ano:</MenuBar.Title>

      <MenuBar.Select id="year" name="year" value={year} onChange={({ target }) => handleYear(target.value)}>
        {years.map((s) => <option key={s} value={s}>{s}</option>)}
      </MenuBar.Select>
    </MenuBar>
  );
};

export default Menu;
