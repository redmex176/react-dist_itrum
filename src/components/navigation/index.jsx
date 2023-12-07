import './style.scss';

import svgLink from '../../img/nav-img.jsx';
import NavigationItem from '../navigation-item/index.jsx';


const Navigation = () => {
    return (
        <div className='nav'>
            <NavigationItem text="Продукты" img={svgLink.item1} to="/products" />
            <NavigationItem text="Клиенты" img={svgLink.item2} to="/clients" />
            <NavigationItem text="Категории" img={svgLink.item3} to="/categories"/>
            <NavigationItem text="Города" img={svgLink.item4} to="/cities" />
            <NavigationItem text="Бренды" img={svgLink.item5} to="/brands" />
            <NavigationItem text="Протоколы" img={svgLink.item6}  to="/protocols" />
            <NavigationItem text="Заказы" img={svgLink.item7} to="/orders" />
            <NavigationItem text="Баннеры" img={svgLink.item8} to="/banners" />
            <NavigationItem text="Семинары" img={svgLink.item9} to="/seminars" />
            <NavigationItem text="Промокоды" img={svgLink.item10} to="/promo" />
        </div>
    );
};

export default Navigation;