import React from 'react';
import {useState} from 'react';

import SearchPanel from '../../../components/Search-panel/index.js';
import SearchFilter from '../../../components/Search-filter/index.js';

import TableHeader from './Table-header/index.jsx';
import TableList from './Table-list/index.jsx';

import CLIENTS_DATA from '../../../constants/clients_request.js';

import styles from '../../Products/components/style.module.scss';

function Clients() {
    const [productList, setProductsList] = useState(CLIENTS_DATA);
    const [pageList, setPageList] = useState(productList);

    let [page, setPage] = useState(10);

    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * page;
    const indexOfFirstItem = indexOfLastItem - page;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
    const [searchValue, setSearchValue] = useState('');

    const filterProducts = (e) => {
        page = e.target.value;
        setPage(e.target.value);
        if(e.target.value == 10) {
            setPageList(productList.slice(0, page));
        } else if(e.target.value == 20) {
            setPageList(productList.slice(0, page));
        }else if(e.target.value == 30) {
            setPageList(productList.slice(0, page));
        }
    }

    const nextPage = (e) => {
        if (indexOfLastItem < productList.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = (e) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const currentPageToggle = () => {
       return currentPage;
    }

    const handleSearch = (e) => {
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

    const handleEmpty = (e) => {
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
                      nextPage={nextPage}
                      prevPage={prevPage}
                      currentPage={currentPage}
                      currentPageToggle={currentPageToggle}
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