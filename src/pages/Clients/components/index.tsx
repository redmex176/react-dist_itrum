import React, { FC } from 'react';
import {useState} from 'react';

import SearchPanel from '../../../components/Search-panel/index.js';
import SearchFilter from '../../../components/Search-filter/index.js';

import TableHeader from './Table-header/index.jsx';
import TableList from './Table-list/index.tsx';

import CLIENTS_DATA from '../../../constants/clients_request.js';

import styles from '../../Products/components/style.module.scss';

const Clients: FC = () => {
    const [productList, setProductsList] = useState(CLIENTS_DATA);
    const [pageList, setPageList] = useState(productList);

    let [page, setPage] = useState<number>(10);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const indexOfLastItem = currentPage * page;
    const indexOfFirstItem = indexOfLastItem - page;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
    const [searchValue, setSearchValue] = useState<string>('');

    const filterProducts = (e: React.ChangeEvent<HTMLInputElement>) => {

        page = parseInt(e.target.value);

        setPage(page);
        
        if(page == 10) {
            setPageList(productList.slice(0, page));
        } else if(page == 20) {
            setPageList(productList.slice(0, page));
        }else if(page == 30) {
            setPageList(productList.slice(0, page));
        }
    }

    const nextHandlerPage = () => {
        if (indexOfLastItem < productList.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevHandlerPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchValue(value);

        const searchList = CLIENTS_DATA.filter(item => {
            return (
                item.name.toLowerCase().includes(value) ||
                item.phone.toLowerCase().includes(value) ||
                (item.lastName !== null && (item.lastName.toLowerCase().includes(value))) ||
                (item.email !== null && (item.email.toLowerCase().includes(value)))
            );
        });
    
        setProductsList(searchList);
        setCurrentPage(1);
    }

    const handleEmpty = () => {
        setSearchValue('');
        setProductsList(CLIENTS_DATA);
        setCurrentPage(1);
    }

    return (
        <div className={styles.wrapp}>
            <div className={styles.search__panel}>
                <SearchPanel 
                handleSearch={handleSearch}
                handleEmpty={handleEmpty}
                value={searchValue}
               />
                <SearchFilter 
                      filterProducts={filterProducts} 
                      list={productList}  
                      page={page}
                      nextPage={nextHandlerPage}
                      prevPage={prevHandlerPage}
                      currentPage={currentPage}
                      currentPageToggle={() => {currentPage}}
                />
            </div>  
            <>
                <TableHeader/>
                <TableList list={currentItems}/>
            </>
        </div>
    );
}

export default Clients;