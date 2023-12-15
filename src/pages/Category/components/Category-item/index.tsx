import React from "react";
import styles from './style.module.scss';

import EditSvg from '../../../../assets/icon/edit.svg?react';
import TrashSvg from '../../../../assets/icon/trash.svg?react';

const CategoryItem = ({
    handleChoseCategory,
    handleDeleteCategory,
    handleEditCategory,
    handleSaveEdit,
    handleCancelEdit,
    placeholder,
    btnText,
    handleAddCategory,
    categories,
    inputAddValue,
    setInputAddValue,
    inputEditValue,
    setInputEditValue,
    isEdit,
    setIsEdit,
    editedCategoryId
  }) => {
    const elements = categories.map((item, i) => (
      <li className={styles.title__item} key={i}>
        {isEdit && editedCategoryId === item.id ? (
          <>
            <input
              autoFocus
              type="text"
              value={inputEditValue}
              onChange={(e) => setInputEditValue(e.target.value)}
            />
            <button onClick={() => handleSaveEdit(inputEditValue)}>Сохранить</button>
            <button onClick={() => handleCancelEdit()}>Отменить</button>
          </>
        ) : (
          <>
            <p>{item.category}</p>
            <EditSvg onClick={() => handleEditCategory(item.id)}/>
            <TrashSvg onClick={() => handleDeleteCategory(item.id)}/>
          </>
        )}
      </li>
    ));
  
    return (
      <div className={styles.card}>
        <input
          placeholder={placeholder}
          type="text"
          value={inputAddValue}
          onChange={(e) => setInputAddValue(e.target.value)}
        />
        <button onClick={handleAddCategory}>{btnText}</button>
        {elements.length === 0 ? (
          <div className={styles.title__items}>Здесь пока нет подкатегорий</div>
        ) : (
          <>
            <div className={styles.title__card}>Название категории</div>
            <ul>{elements}</ul>
          </>
        )}
      </div>
    );
  };
  
  export default CategoryItem;
  