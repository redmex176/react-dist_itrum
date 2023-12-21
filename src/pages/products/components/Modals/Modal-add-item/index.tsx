import React from 'react';
import { useState } from 'react';
import styles from'./style.module.scss';

interface Props {
    addItem: any,
    newItem: any,
    setNewItem: any,
    modalTask: boolean,
    closeModalTask: any
}

const ModalTask: React.FC<Props> = ({addItem, newItem, setNewItem, modalTask, closeModalTask}) => {
    const activeModal = modalTask ? `${styles.show} ${styles.fade}` : styles.hide;

    return(
        <div onClick={closeModalTask}className={`${styles.modal__task} ${activeModal}`}>
            <form onSubmit={addItem} className={styles.modal__content}>
                <div className={styles.task__btns}>
                    <button><span>Удалить</span></button>
                    <button><span>Сохранить</span></button>
                </div>
                <div className={styles.form__add}>
                    <ul className={styles.form__list}>
                        <li>
                            <span>Начисление кешбека с покупки</span>
                            <input 
                                type="text" 
                                name="cashback"  
                                placeholder='20%'
                                onChange={({target: {value}}) => setNewItem({ ...newItem, cashback: value })}
                            />
                        </li>
                        <li>
                            <span>Категория</span>
                            <select 
                                name="category" 
                                placeholder="Название категории"
                                onChange={({target: {value}}) => setNewItem({ ...newItem, category: value })}
                                defaultValue="category">
                               <option value="category">Обувь</option>
                               <option value="Кроссовки">Кроссовки</option>
                               <option value="Ботинки">Ботинки</option>
                            </select>
                        </li>
                        <li>
                            <span>Подкатегории</span>
                            <select 
                                name="subCategory" 
                                placeholder="Название подкатегории"
                                onChange={({target: {value}}) => setNewItem({ ...newItem, subCategory: value })}>
                               <option value="subCategory">Название подкатегории</option>
                               <option value="Название подкатегории1">Название подкатегории1</option>
                               <option value="Название подкатегории2">Название подкатегории2</option>
                            </select>
                        </li>
                        <li>
                            <span>Бренд</span>
                            <select 
                            name="brand"
                            placeholder="Название подкатегории"
                            onChange={({target: {value}}) => setNewItem({ ...newItem, brand: value })}>
                               <option value="brand">Имя бренда</option>
                               <option value="Adidas">Adidas</option>
                               <option value="Nike">Nike</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default ModalTask;