import React from 'react';

import styles from '../search-panel/style.module.scss';

import CloseSvg from '../../assets/icon/x.svg?react';

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
             <CloseSvg
                onClick={handleEmpty}
                className={styles.img}
             />
        </>
    ); 
}

export default SearchPanel;

