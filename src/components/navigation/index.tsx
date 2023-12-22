import React, { FC } from "react";

import NavigationItem from "../Navigation-item/";

import Products from "../../assets/icon/products.svg?react";
import Users from "../../assets/icon/users.svg?react";
import Category from "../../assets/icon/category.svg?react";
import City from "../../assets/icon/city.svg?react";
import Winer from "../../assets/icon/Winer.svg?react";
import Protocols from "../../assets/icon/protocols.svg?react";
import Orders from "../../assets/icon/orders.svg?react";
import Banners from "../../assets/icon/baners.svg?react";
import Seminars from "../../assets/icon/seminars.svg?react";
import Promo from "../../assets/icon/promo.svg?react";

import styles from "./style.module.scss";

const Navigation: FC = () => {
    return (
        <div className={styles.nav}>
            <NavigationItem text="Продукты" ico={<Products />} to="/products" />
            <NavigationItem text="Клиенты" ico={<Users />} to="/clients" />
            <NavigationItem
                text="Категории"
                ico={<Category />}
                to="/category"
            />
            <NavigationItem text="Города" ico={<City />} to="/cities" />
            <NavigationItem text="Бренды" ico={<Winer />} to="/brands" />
            <NavigationItem
                text="Протоколы"
                ico={<Protocols />}
                to="/protocols"
            />
            <NavigationItem text="Заказы" ico={<Orders />} to="/orders" />
            <NavigationItem text="Баннеры" ico={<Banners />} to="/banners" />
            <NavigationItem text="Семинары" ico={<Seminars />} to="/seminars" />
            <NavigationItem text="Промокоды" ico={<Promo />} to="/promo" />
        </div>
    );
};

export default Navigation;
