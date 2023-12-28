import React, { FC, useState } from "react";
import CategoryItem from "./Category-item";

import { addCategory, setActiveCategory, addSubCategory, deleteCategory, deleteSubCategory, editCategory, editSubCategory } from "../../../redux/actions";



import ArrowSvg from "../../../assets/icon/arrow.svg?react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";

type SubCategory = { subCategory: string; id: number };

interface Category {
    category: string;
    id: number;
    isActive: boolean;
    subCategories: SubCategory[];
}

interface CategoryProps {}

const Category: FC<CategoryProps> = () => {

    const categories = useSelector((state: Category[]) => state);
    const dispatch = useDispatch();
console.log(categories);

    const [inputAddValue, setInputAddValue] = useState("");
    const [inputSubAddValue, setInputSubAddValue] = useState("");
    // const [categories, setCategories] = useState<Category[]>([]);
    const [activeCategoryId, setActiveCategoryId] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [editedCategoryId, setEditedCategoryId] = useState(0);
    const [inputEditValue, setInputEditValue] = useState("");
    const [inputSubCategoryEditValue, setInputSubCategoryEditValue] =
        useState("");
    const [isSubCategoryEdit, setIsSubCategoryEdit] = useState(false);
    const [editedSubCategoryId, setEditedSubCategoryId] = useState(0);

    const handleAddCategory = () => {
        if (inputAddValue.trim() !== "") {
          const newCategory: Category = {
            category: inputAddValue,
            id: Date.now(),
            isActive: false,
            subCategories: [],
          };

          dispatch(addCategory(newCategory));
          setInputAddValue("");
        }
      };

      const handleAddSubCategory = () => {
        if (inputSubAddValue.trim() !== "") {
          if (activeCategoryId !== 0) {
            dispatch(addSubCategory(activeCategoryId, { subCategory: inputSubAddValue, id: Date.now() }));
            setInputSubAddValue("");
          }
        }
      };

      const handleItemClick = (id: number) => {
        dispatch(setActiveCategory(id));
      };

      const handleDeleteCategory = (id: number) => {
        dispatch(deleteCategory(id));
      };

    const handleDeleteSubCategory = (subCategoryId: number) => {
        const updatedCategories = categories.map((category) => {
            if (category.subCategories) {
                return {
                    ...category,
                    subCategories: category.subCategories.filter(
                        (subCategory: { id: number }) =>
                            subCategory.id !== subCategoryId
                    ),
                };
            }
            return category;
        });

        setCategories(updatedCategories);
    };

    const handleEditCategory = (id: number) => {
        setIsEdit(true);
        setEditedCategoryId(id);
        const categoryToEdit = categories.find(
            (category) => category.id === id
        );
        setInputEditValue(categoryToEdit?.category || "");
    };

    const handleSaveEdit = (editedText: string) => {
        if (inputEditValue.trim() !== "") {
            const newCategories = categories.map((category) => {
                if (category.id === editedCategoryId) {
                    return { ...category, category: editedText };
                }
                return category;
            });

            setCategories(newCategories);
            setIsEdit(false);
        }
    };

    const handleCancelEdit = () => {
        setIsEdit(false);
        setInputEditValue("");
    };

    const handleEditSubCategory = (id: number) => {
        setIsSubCategoryEdit(true);
        setEditedSubCategoryId(id);
        const subCategoryToEdit = getSubCategoryById(id);
        setInputSubCategoryEditValue(subCategoryToEdit?.subCategory || "");
    };

    const handleSaveSubCategoryEdit = (editedText: string) => {
        if (inputSubCategoryEditValue.trim() !== "") {
            const updatedCategories = categories.map((category) => {
                if (category.id === activeCategoryId) {
                    return {
                        ...category,
                        subCategories: category.subCategories.map(
                            (subCategory) => {
                                if (subCategory.id === editedSubCategoryId) {
                                    return {
                                        ...subCategory,
                                        subCategory: editedText,
                                    };
                                }
                                return subCategory;
                            }
                        ),
                    };
                }
                return category;
            });

            setCategories(updatedCategories);
            setIsSubCategoryEdit(false);
            setInputSubCategoryEditValue("");
        }
    };

    const handleCancelSubCategoryEdit = () => {
        setIsSubCategoryEdit(false);
        setInputSubCategoryEditValue("");
    };

    const getSubCategoryById = (subCategoryId: number) => {
        const category = categories.find(
            (category) => category.id === activeCategoryId
        );
        if (category && category.subCategories) {
            return (
                category.subCategories.find(
                    (subCategory: { id: number }) =>
                        subCategory.id === subCategoryId
                ) || { subCategory: "", id: 0 }
            );
        }
        return { subCategory: "", id: 0 };
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
                handleItemClick={handleItemClick}
                handleDeleteCategory={handleDeleteCategory}
                inputEditValue={inputEditValue}
                setInputEditValue={setInputEditValue}
                handleEditCategory={handleEditCategory}
                handleSaveEdit={handleSaveEdit}
                handleCancelEdit={handleCancelEdit}
                isEdit={isEdit}
                editedCategoryId={editedCategoryId}
                handleAddSubCategory={() => {}}
                isSubCategory={false}
                inputSubAddValue={""}
                setInputSubAddValue={() => {}}
                handleEditSubCategory={() => {}}
                handleSaveSubCategoryEdit={() => {}}
            />
            <ArrowSvg />
            {categories.length !== 0 && activeCategoryId !== 0 ? (
                <CategoryItem
                    placeholder="Введите название подкатегории"
                    btnText="Добавить подкатегорию"
                    categories={
                        categories.find(
                            (category) => category.id === activeCategoryId
                        )?.subCategories || []
                    }
                    handleAddSubCategory={handleAddSubCategory}
                    isSubCategory={true}
                    inputSubAddValue={inputSubAddValue}
                    setInputSubAddValue={setInputSubAddValue}
                    handleDeleteCategory={handleDeleteSubCategory}
                    handleEditSubCategory={handleEditSubCategory}
                    handleSaveSubCategoryEdit={handleSaveSubCategoryEdit}
                    handleCancelEdit={handleCancelSubCategoryEdit}
                    isEdit={isSubCategoryEdit}
                    editedCategoryId={editedSubCategoryId}
                    inputEditValue={inputSubCategoryEditValue}
                    setInputEditValue={setInputSubCategoryEditValue}
                    inputAddValue={inputAddValue}
                    handleEditCategory={() => {}}
                    handleSaveEdit={() => {}}
                    handleAddCategory={() => {}}
                    setInputAddValue={() => {}}
                    handleItemClick={() => {}}
                />
            ) : (
                <p>Выберите категорию</p>
            )}
        </div>
    );
};

export default Category;
