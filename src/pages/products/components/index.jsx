import { useEffect, useState } from 'react';

// import {ProductsBtn, SearchFilter, SearchPanel, TableList, TableHeader, ModalProducts, ModalTask} from '../../../components/index.jsx';
import ProductsBtn from './Products-button/index.jsx';
import SearchFilter from '../../../components/Search-filter';
import SearchPanel from '../../../components/Search-panel';
import TableList from './Table-list/index.jsx';
import TableHeader from './Table-header/index.jsx';
import ModalProducts from './Modal/index.jsx';
import ModalTask from './Modal-task/index.jsx';

import PRODUCTS_DATA from '../../../constants/products.js';
 
import styles from '../components/style.module.scss';

function Products() {
    // console.log('Products');
    const [productList, setProductsList] = useState(PRODUCTS_DATA);
    const [pageList, setPageList] = useState(productList);

    const [page, setPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
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
        const closeModalTaskKey = (event) => {
          if (event.keyCode === 27) {
            setModalTask(false);
          }
        };
        window.addEventListener('keydown', closeModalTaskKey);
        return () => {
          window.removeEventListener('keydown', closeModalTaskKey);
        };
      }, [modalTask]);

    const handleCheckboxChange = (id) => {
        const updatedList = productList.map(item => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
     
        setModal(false);
        setProductsList(updatedList);       
    };
    
    const handleHeaderCheckboxChange = () => {
        const allChecked = productList.every(item => item.checked);
    
        const updatedList = productList.map(item => ({
            ...item,
            checked: !allChecked
        }));

        setProductsList(updatedList);
    };
    
    const onDelete = () => {
        const updatedList = productList.filter(item => !item.checked);
        setProductsList(updatedList);

        // const newCurrentPage = Math.ceil(updatedList.length / page);
        // setCurrentPage(newCurrentPage > 0 ? newCurrentPage : 1);
    }

    const filterProducts = (e) => {
        setPage(e.target.value);
        if(page == 10) {
            setPageList(productList.slice(0, page));
        } else if(page == 20) {
            setPageList(productList.slice(0, page));
        }else if(page == 30) {
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

    const addItem = (e) => {
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

    const closeModalTask = (e)=> {
        if(e.target.classList.contains(styles.modal__task)) {
            setModalTask(!modalTask);
        }
    }

    return (
        <div className={styles.wrapp}>
            <div className={styles.search__panel}>
                <SearchPanel />
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
                modalTask={modalTask}
                setModalTask={setModalTask}/>
        </div>
    );
}

export default Products;