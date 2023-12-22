import React from "react";

import { NavLink } from "react-router-dom";

import styles from "../navigation-item/style.module.scss";

interface Props {
    text: string;
    ico: React.ReactNode;
    to: string;
}

const NavigationItem: React.FC<Props> = ({ text, ico, to }: Props) => {
    return (
        <NavLink className={styles.nav__item} to={to}>
            {ico}
            <p>{text}</p>
        </NavLink>
    );
};

export default NavigationItem;
