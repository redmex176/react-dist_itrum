import React, { FC } from 'react';
import {useState} from 'react';

import SearchPanel from '../../components/Search-panel/';
import SearchFilter from '../../components/Search-filter/';

import TableHeader from './Table/Header';
import TableList from './Table/List';

import CLIENTS_DATA from '../../constants/clients_request.js';
import ORDERS_DATA from '../../constants/orders_request.js';

import styles from '../../pages/Products/components/style.module.scss';

interface Client {
    name: string;
    phone: string;
    lastName: string | null;
    email: string | null;
  }

const Orders: FC = () => {
    const [productList, setProductsList] = useState<Client[]>(CLIENTS_DATA);
    
    const [page, setPage] = useState<number>(10);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const indexOfLastItem = currentPage * page;
    const indexOfFirstItem = indexOfLastItem - page;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
    const [searchValue, setSearchValue] = useState<string>('');

    console.log(ORDERS_DATA[0].data);
    
    const filterProducts = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPage(parseInt(e.target.value));
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

export default Orders;