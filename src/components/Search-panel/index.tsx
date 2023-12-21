import React from 'react';

import styles from '../search-panel/style.module.scss';

import CloseSvg from '../../assets/icon/x.svg?react';
import SearchSvg from '../../assets/icon/search.svg?react';

interface Props {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmpty: () => void;
    value: string;
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
             <SearchSvg/>
             <CloseSvg
                onClick={handleEmpty}
                className={styles.img}
             />
        </>
    ); 
}

export default SearchPanel;

