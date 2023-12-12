import React, { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import styles from'../navigation-item/style.module.scss'

interface Props {
  text : string,
  img: ReactNode,
  to: string
}

function NavigationItem( {text, img, to}: Props) {
  return (
    <>
      <NavLink
        className={styles.nav__item} to={to}>
            {img}
            <p>{text}</p>
      </NavLink>
    </>
  );
}

export default NavigationItem;
