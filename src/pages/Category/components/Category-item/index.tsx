import React, { useState } from "react";
import styles from './style.module.scss';

import EditSvg from '../../../../img/edit.svg';
import TrashSvg from '../../../../img/trash.svg';

const CategoryItem = ({handleChoseCategory, handleDeleteCategory, handleEditCategory, placeholder, btnText, handleAddCategory, categories, inputValue, setInputValue }) => {

    const elements = categories.map((item, i) => (
        <li onClick={() => handleChoseCategory(item.id)} className={styles.title__item} key={i}>
            <input readOnly defaultValue={item.category} />
            <img onClick={() => handleEditCategory(item.id)} src={EditSvg} alt="" />
            <img onClick={() => handleDeleteCategory(item.id)} src={TrashSvg} alt="" />
        </li>
    ));

    return (
        <div className={styles.card}>
            <input
                placeholder={placeholder}
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddCategory}>{btnText}</button>
            {elements.length === 0 ? (
                <div className={styles.title__items}>Здесь пока нет подкатегорий</div>
            ) : (
                <>
                    <div className={styles.title__card}>Название категории</div>
                    <ul>
                        {elements}
                    </ul>
                </>
            )}
        </div>
    );
};

export default CategoryItem;