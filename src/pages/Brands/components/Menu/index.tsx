import { ChangeEvent } from 'react';
import styles from './style.module.scss'

interface MenuProps{
    handleAddItem: () => void,
    inputValue: string,
    setInputValue: (value: string) => void;
    handeImgClick: (e: ChangeEvent<HTMLInputElement>) => void;
    titleImg: any;
}

const Menu: React.FC<MenuProps> = ({handleAddItem, inputValue, setInputValue, handeImgClick, titleImg}) => {

    return (
        <div className={styles.menu__wrapp}>
            <input 
               onKeyDown={(e) => {
                if(e.key === "Enter") {
                    handleAddItem();
                }
            }} 
                type="text" 
                placeholder='Введите название бренда'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}/>
            <label htmlFor="file-input">
               <input onChange={handeImgClick} id="file-input" type="file" name="file"/>
            </label> 
            <input type="" value={titleImg} readOnly placeholder='Загрузите логотип бренда'/>
            <button onClick={handleAddItem}>Добавить бренд</button>
        </div>
    );
}

export default Menu;