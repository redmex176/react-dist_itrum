import React, {FC} from 'react';
import { useEffect, useState } from 'react';

import ProductsBtn from './Button';
import SearchFilter from '../../../components/Search-filter/';
import TableList from './Table/List';
import TableHeader from './Table/Header';
import ModalProducts from './Modals/Modal-delete-item/';
import ModalTask from './Modals/Modal-add-item/';

import PRODUCTS_DATA from '../../../constants/products.js';
 
import styles from '../components/style.module.scss';

interface Product {
    category: string;
    subCategory: string;
    brand: string;
    products: string;
    cashback: number ;
    id: number;
    checked: boolean;
  }

const Products:FC = () => {

    const [productList, setProductsList] = useState<Product[]>(PRODUCTS_DATA);

    const [page, setPage] = useState<number>(10);
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const indexOfLastItem = currentPage * page;
    const indexOfFirstItem = indexOfLastItem - page;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

    const [newItem, setNewItem] = useState({
        category: '',
        subCategory: '',
        products: '',
        brand: '',
        cashback: ''
    });

    const [modalTask, setModalTask] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const closeModalTaskKey = (e: { keyCode: number; }) => {
          if (e.keyCode === 27) {
            setModalTask(false);
          }
        };
        window.addEventListener('keydown', closeModalTaskKey);
        return () => {
          window.removeEventListener('keydown', closeModalTaskKey);
        };
      }, [modalTask]);

    const handleCheckboxChange = (id: any) => {
        const updatedList = productList.map((item: any) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setModal(false);
        setProductsList(updatedList);       
    };
    
    const handleHeaderCheckboxChange = () => {
        const allChecked = productList.every((item: { checked: any; }) => item.checked);
    
        const updatedList = productList.map((item: any) => ({
            ...item,
            checked: !allChecked
        }));

        setProductsList(updatedList);
    };
    
    const onDelete = () => {
        const updatedList = productList.filter((item: { checked: boolean; }) => !item.checked);
        setProductsList(updatedList);

        const newCurrentPage = Math.ceil(updatedList.length / page);
        setCurrentPage(newCurrentPage > 0 ? newCurrentPage : 1);
    }

    const filterProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPage = +e.target.value;
        setPage(newPage);
    }

    const nextPage = () => {
        if (indexOfLastItem < productList.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const currentPageToggle = () => {
       return currentPage;
    }

    const addItem = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
        e.preventDefault();
       
        const newItemObject = {
            category: newItem.category,
            subCategory: newItem.subCategory,
            brand: newItem.brand,
            products: newItem.products,
            cashback: +newItem.cashback,
            id: productList.length, 
            checked: false
        };

        if(!newItemObject.category && !newItemObject.subCategory && !newItemObject.brand && !newItemObject.products && !newItemObject.cashback) {
           console.log('empty value');
        } else {
            setProductsList([...productList, newItemObject]);
            setModalTask(false);
        }
        e.target.reset();
    }

    const closeModalTask = (e: { target: { classList: { contains: (arg0: any) => any; }; }; }) => {
        if(e.target.classList.contains(styles.modal__task)) {
            setModalTask(!modalTask);
        }
    }

    return (
        <div className={styles.wrapp}>
            <div className={styles.search__panel}>
                
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
            <ProductsBtn 
                openModalTask={() => setModalTask(!modalTask)}
            />
            <>
                <TableHeader 
                    handleHeaderCheckboxChange={handleHeaderCheckboxChange}
                    />
                <TableList
                    onCheckboxChange={handleCheckboxChange}
                    list={currentItems}
                />
            </>
            <ModalProducts 
                list={productList}
                onDelete={onDelete}
                closeModal={() => setModal(!modal)}
                modal={modal}
            />
            <ModalTask 
                closeModalTask= {closeModalTask}
                addItem={addItem} 
                newItem={newItem} 
                setNewItem={setNewItem} 
                modalTask={modalTask}/>
        </div>
    );
}

export default Products;