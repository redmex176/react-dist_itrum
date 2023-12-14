import React from 'react';

import styles from '../search-panel/style.module.scss';

import svg from '../../img/x.svg';

interface Props {
    handleSearch: any,
    handleEmpty: any,
    value: string
}

function SearchPanel({handleSearch, handleEmpty, value}: Props) {
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

