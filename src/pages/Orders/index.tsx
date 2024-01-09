import React, { FC } from 'react';
import {useState} from 'react';

import SearchPanel from '../../components/Search-panel/';
import SearchFilter from '../../components/Search-filter/';

import TableHeader from './Table/Header';
import TableList from './Table/List';

import {useAppSelector} from '../../redux/hooks/hooks';

import styles from '../../pages/Products/components/style.module.scss';

import { Orders } from '../../types/orders';
import ModalOrders from './Modal';

const Orders: FC = () => {

    const ordersData = useAppSelector((state) => state.orders.data);
    // const dispatch = useAppDispatch();

    console.log(ordersData);
    
    const [ordersList, setOrdersList] = useState<Orders[]>(ordersData);
    const [modalOrders, setModalOrders] = useState(true);
    const [page, setPage] = useState(10);

    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * page;
    const indexOfFirstItem = indexOfLastItem - page;
    const currentItems = ordersList.slice(indexOfFirstItem, indexOfLastItem);
    const [searchValue, setSearchValue] = useState('');
    
    const filterOrders = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPage(parseInt(e.target.value));
    }

    const nextHandlerPage = () => {
        if (indexOfLastItem < ordersList.length) {
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

        const searchList = ordersData.filter(item => {
            return (
                (item.user.name !== null && (item.user.name.toLowerCase().includes(value))) ||
                item.order_number.toLowerCase().includes(value) ||
                // item.date.toLowerCase().includes(value) ||
                (item.user.lastName !== null && (item.user.lastName.toLowerCase().includes(value)))
            );
        });
    
        setOrdersList(searchList);
        setCurrentPage(1);
    }

    const handleEmpty = () => {
        setSearchValue('');
        setOrdersList(ordersData);
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
                      filterProducts={filterOrders} 
                      list={ordersList}  
                      page={page}
                      nextPage={nextHandlerPage}
                      prevPage={prevHandlerPage}
                      currentPage={currentPage}
                      currentPageToggle={() => {currentPage}}
                />
            </div>  
            <>
                <TableHeader/>
                <TableList list={currentItems} />
            </>
            <ModalOrders
                modalOrders = {modalOrders}
            /> 
        </div>
    );
}

export default Orders;