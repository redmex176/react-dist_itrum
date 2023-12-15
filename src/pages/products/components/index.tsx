import React, {FC} from 'react';
import { useEffect, useState } from 'react';

import ProductsBtn from './Products-button/index.tsx';
import SearchFilter from '../../../components/Search-filter/index.tsx';
import SearchPanel from '../../../components/Search-panel/index.tsx';
import TableList from './Table-list/index.tsx';
import TableHeader from './Table-header/index';
import ModalProducts from './Modal/index';
import ModalTask from './Modal-task/index.tsx';

import PRODUCTS_DATA from '../../../constants/products.js';
 
import styles from '../components/style.module.scss';

const Products:FC = () => {

    const [productList, setProductsList] = useState<any>(PRODUCTS_DATA);

    const [pageList, setPageList] = useState<any>(productList);

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
        const closeModalTaskKey = (event: { keyCode: number; }) => {
          if (event.keyCode === 27) {
            setModalTask(false);
          }
        };
        window.addEventListener('keydown', closeModalTaskKey);
        return () => {
          window.removeEventListener('keydown', closeModalTaskKey);
        };
      }, [modalTask]);

    const handleCheckboxChange = (id: any) => {
        const updatedList = productList.map((item: { id: number; checked: boolean; }) => {
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
        if(newPage % 10 === 0) return setPageList(productList.slice(0, page));
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
            cashback: newItem.cashback,
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
                <SearchPanel handleSearch={undefined} handleEmpty={undefined} value={''} />
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