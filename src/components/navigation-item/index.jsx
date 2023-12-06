import { NavLink } from 'react-router-dom';

import '../navigation-item/style.scss'

function NavigationItem( {text, img, to}) {

  return (
    <>
      <NavLink
        className="nav__item" to={to}>
            {img}
            <p>{text}</p>
      </NavLink>
    </>
  );
}

export default NavigationItem;
