import React, { FC, useState } from "react";
import CategoryItem from "./Category-item";
import styles from './style.module.scss';

const Category: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [categories, setCategories] = useState<any[]>([]);

    const handleAddCategory = () => {
        const newCategory = {
            category: inputValue,
            id: Date.now(),
            edit: false
        };

        setCategories([...categories, newCategory]);
        setInputValue("");         
    };
    console.log(categories);
    const handleEditCategory = (id: any) => {
        console.log(id);
        
    }

    const handleDeleteCategory = (id: any) => {
        console.log(id);
        
    }

    const handleChoseCategory = (id: any) => {
        console.log(id);
        
    }

    return (
        <div className={styles.category__wrapp}>
            <CategoryItem
                placeholder="Введите название категории"
                btnText="Добавить категорию"
                handleAddCategory={handleAddCategory}
                categories={categories}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleEditCategory={handleEditCategory}
                handleDeleteCategory={handleDeleteCategory}
                handleChoseCategory={handleChoseCategory}
            />
        </div>
    );
};

export default Category;