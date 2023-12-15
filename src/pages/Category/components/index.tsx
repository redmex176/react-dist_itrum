import React, { FC, useState } from "react";

import CategoryItem from "./Category-item";
import styles from './style.module.scss';

const Category: FC = () => {
  const [inputAddValue, setInputAddValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editedCategoryId, setEditedCategoryId] = useState(null);

  const handleAddCategory = () => {
    const newCategory = {
      category: inputAddValue,
      id: Date.now(),
      edit: false
    };

    setCategories([...categories, newCategory]);
    setInputAddValue("");         
  };

  const handleEditCategory = (id) => {
    setIsEdit(true);
    setEditedCategoryId(id);
    const categoryToEdit = categories.find(category => category.id === id);
    setInputEditValue(categoryToEdit.category);
  };

  const handleSaveEdit = (editedText) => {
    const updatedCategories = categories.map(category => {
      if (category.id === editedCategoryId) {
        return { ...category, category: editedText };
      }
      return category;
    });

    setCategories(updatedCategories);
    setIsEdit(false);
    
    setInputEditValue("");
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    
    setInputEditValue("");
  };

  const handleDeleteCategory = (id: any) => {
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
    setIsEdit(false);  
    
  };

  const handleChoseCategory = (id: any) => {
    console.log(id);
  };

  return (
    <div className={styles.category__wrapp}>
      <CategoryItem
        placeholder="Введите название категории"
        btnText="Добавить категорию"
        handleAddCategory={handleAddCategory}
        categories={categories}
        inputAddValue={inputAddValue}
        setInputAddValue={setInputAddValue}
        inputEditValue={inputEditValue}
        setInputEditValue={setInputEditValue}
        handleEditCategory={handleEditCategory}
        handleSaveEdit={handleSaveEdit}
        handleCancelEdit={handleCancelEdit}
        handleDeleteCategory={handleDeleteCategory}
        handleChoseCategory={handleChoseCategory}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editedCategoryId={editedCategoryId}
      />
    </div>
  );
};

export default Category;
