import styles from '../search-panel/style.module.scss';
import svg from '../../img/x.svg';

function SearchPanel({handleSearch, handleEmpty, value}) {
    return(
        <>
            <input onChange={handleSearch}
                className={styles.search}
                type="text" 
                placeholder="Поиск"
                value={value}
             />
             <img 
             onClick={handleEmpty}
             src={svg} 
             alt="" 
             className={styles.img}/>
        </>
    ); 
}

export default SearchPanel;