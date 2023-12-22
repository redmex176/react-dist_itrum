import React from "react";
import styles from "./style.module.scss";

interface TableListItemProps {
    category: string;
    subCategory: string;
    brand: string;
    products: string;
    cashback: number;
    checked: boolean;
    onCheckboxChange: () => void;
}

const TableListItem: React.FC<TableListItemProps> = ({
    category,
    subCategory,
    brand,
    products,
    cashback,
    checked,
    onCheckboxChange,
}) => {
    return (
        <ul className={styles.list__item}>
            <li>
                <input
                    type="checkbox"
                    name="checkbox"
                    checked={checked}
                    onChange={onCheckboxChange}
                />
            </li>
            <li>
                <span>{category}</span>
            </li>
            <li>
                <span>{subCategory}</span>
            </li>
            <li>
                <span>{brand}</span>
            </li>
            <li>
                <span>{products}</span>
            </li>
            <li>
                <span>{cashback}%</span>
            </li>
        </ul>
    );
};
export default TableListItem;
