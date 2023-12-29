import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./style.module.scss";

import EditSvg from "../../../../assets/icon/edit.svg?react";
import SaveSvg from "../../../../assets/icon/done.svg?react";
import CloseSvg from "../../../../assets/icon/close.svg?react";
import TrashSvg from "../../../../assets/icon/trash.svg?react";

interface CategoryItemProps {
    categories: any;
    handleDeleteCategory: (id: number, subId: number) => void;
    handleEditCategory: (id: number) => void;
    handleSaveEdit: (value: string) => void;
    placeholder: string;
    btnText: string;
    handleAddCategory: () => void;
    inputAddValue: string;
    setInputAddValue: (value: string) => void;
    inputEditValue: string;
    setInputEditValue: (value: string) => void;
    isEdit: boolean;
    editedCategoryId: number | null;
    handleCancelEdit: () => void;
    handleAddSubCategory: () => void;
    isSubCategory: boolean;
    inputSubAddValue: string;
    setInputSubAddValue: (value: string) => void;
    handleItemClick: (id: number) => void;
    handleEditSubCategory: (id: number) => void;
    handleSaveSubCategoryEdit: (value: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
    handleDeleteCategory,
    handleEditCategory,
    handleSaveEdit,
    placeholder,
    btnText,
    handleAddCategory,
    categories,
    inputAddValue,
    setInputAddValue,
    inputEditValue,
    setInputEditValue,
    isEdit,
    editedCategoryId,
    handleCancelEdit,
    handleAddSubCategory,
    isSubCategory,
    inputSubAddValue,
    setInputSubAddValue,
    handleItemClick,
    handleEditSubCategory,
    handleSaveSubCategoryEdit,
}) => {
    const elements = categories.map((item: any) => (
        <li
            className={`${styles.title__item} ${
                item.isActive ? styles.active : ""
            }`}
            key={item.id}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                const target = e.target as HTMLElement;

                if (target.tagName == "LI" || target.tagName == "P") {
                    handleItemClick(item.id);
                }
            }}
        >
            {isEdit && editedCategoryId === item.id ? (
                <>
                    <input
                        autoFocus
                        type="text"
                        value={inputEditValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setInputEditValue(e.target.value)
                        }
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === "Enter") {
                                isSubCategory
                                    ? handleSaveSubCategoryEdit(inputEditValue)
                                    : handleSaveEdit(inputEditValue);
                            } else if (e.key === "Escape") {
                                handleCancelEdit();
                            }
                        }}
                    />
                    <SaveSvg
                        onClick={() =>
                            isSubCategory
                                ? handleSaveSubCategoryEdit(inputEditValue)
                                : handleSaveEdit(inputEditValue)
                        }
                    />
                    <CloseSvg onClick={handleCancelEdit} />
                </>
            ) : (
                <>
                    <p
                        onDoubleClick={() =>
                            isSubCategory
                                ? handleEditSubCategory(item.id)
                                : handleEditCategory(item.id)
                        }
                    >
                        {!isSubCategory ? item.category : item.subCategory}
                    </p>
                    <EditSvg
                        onClick={() =>
                            isSubCategory
                                ? handleEditSubCategory(item.id)
                                : handleEditCategory(item.id)
                        }
                    />
                    <TrashSvg onClick={() => handleDeleteCategory(item.id, item.id)} />
                </>
            )}
        </li>
    ));

    return (
        <div className={styles.card}>
            <input
                placeholder={placeholder}
                type="text"
                value={isSubCategory ? inputSubAddValue : inputAddValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    isSubCategory
                        ? setInputSubAddValue(e.target.value)
                        : setInputAddValue(e.target.value)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        isSubCategory
                            ? handleAddSubCategory()
                            : handleAddCategory();
                    }
                }}
            />
            <button
                onClick={
                    isSubCategory ? handleAddSubCategory : handleAddCategory
                }
            >
                <p>{btnText}</p>
            </button>
            {elements.length === 0 ? (
                <div className={styles.title__items}>
                    {isSubCategory
                        ? "Здесь пока нет подкатегорий"
                        : "Здесь пока нет категорий"}
                </div>
            ) : (
                <>
                    <div className={styles.title__card}>
                        Название {isSubCategory ? "подкатегории" : "категории"}
                    </div>
                    <ul>{elements}</ul>
                </>
            )}
        </div>
    );
};

export default CategoryItem;
