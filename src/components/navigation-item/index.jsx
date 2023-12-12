import { NavLink } from 'react-router-dom';

import styles from'../navigation-item/style.module.scss'

function NavigationItem( {text, img, to}) {
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
