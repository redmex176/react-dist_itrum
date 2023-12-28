
import styles from "./style.module.scss";

const MenuList = () => {
  
    return(
        <>
            <ul className={styles.header__list}>
                <li>Логотип бренда</li>
                <li>Название бренда</li>
            </ul>
        </>
    );
}

export default MenuList;