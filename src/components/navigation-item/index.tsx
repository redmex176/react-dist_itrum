import React, { FC, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import styles from'../navigation-item/style.module.scss'

interface Props {
  text : string,
  img: React.ReactNode,
  to: string
}

const NavigationItem: React.FC<Props> = ( {text, img, to}: Props) => {
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
