import React, { FC } from 'react';

import NavigationItem from '../Navigation-item/index.tsx';

import Products from '../../assets/icon/products.svg?react';
import Users from '../../assets/icon/users.svg?react';
import Category from '../../assets/icon/category.svg?react';
import City from '../../assets/icon/city.svg?react';
import Winer from '../../assets/icon/Winer.svg?react';
import Protocols from '../../assets/icon/protocols.svg?react';
import Orders from '../../assets/icon/orders.svg?react';
import Banners from '../../assets/icon/baners.svg?react';
import Seminars from '../../assets/icon/seminars.svg?react';
import Promo from '../../assets/icon/promo.svg?react';

import styles from './style.module.scss';

const Navigation: FC = () => {
    return (
        <div className={styles.nav}>
            <NavigationItem text="Продукты" img={<Products/>} to="/products"/>
            <NavigationItem text="Клиенты" img={<Users/>} to="/clients" />
            <NavigationItem text="Категории" img={<Category/>} to="/category"/>
            <NavigationItem text="Города" img={<City/>} to="/cities" />
            <NavigationItem text="Бренды" img={<Winer/>} to="/brands" />
            <NavigationItem text="Протоколы" img={<Protocols/>}  to="/protocols" />
            <NavigationItem text="Заказы" img={<Orders/>} to="/orders" />
            <NavigationItem text="Баннеры" img={<Banners/>} to="/banners" />
            <NavigationItem text="Семинары" img={<Seminars/>} to="/seminars" />
            <NavigationItem text="Промокоды" img={<Promo/>} to="/promo" />
        </div>
    );
};

export default Navigation;



