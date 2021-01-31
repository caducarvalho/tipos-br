/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeaderBar from './style';
import db from '../../../db.json';

const Header = () => {
  const { pathname } = useRouter();
  const { value, toggle } = useDarkMode();

  return (
    <HeaderBar>
      <HeaderBar.Title>{db.heading}</HeaderBar.Title>

      <HeaderBar.Nav>
        <HeaderBar.Toggler htmlFor="toggler" active={value}>
          <input id="toggler" name="toggler" type="checkbox" value={value} checked={value} onChange={toggle} />
        </HeaderBar.Toggler>
        <HeaderBar.List>
          <li className={pathname === '/' ? 'active' : 'idle'}><Link href="/"><a>Fontes</a></Link></li>
          <li className={pathname === '/foundries' ? 'active' : 'idle'}><Link href="/foundries"><a>Foundries</a></Link></li>
        </HeaderBar.List>
      </HeaderBar.Nav>
    </HeaderBar>
  );
};

export default Header;
