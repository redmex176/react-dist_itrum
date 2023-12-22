import React from "react";
import style from "./style.module.scss";

interface TableHeaderProps {
    handleHeaderCheckboxChange: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
    handleHeaderCheckboxChange,
}) => {
    return (
        <ul className={style.table__header}>
            <li>
                <input
                    type="checkbox"
                    name="checkbox"
                    onChange={handleHeaderCheckboxChange}
                />
            </li>
            <li>
                <span>Категория</span>
            </li>
            <li>
                <span>Подкатегория</span>
            </li>
            <li>
                <span>Бренд</span>
            </li>
            <li>
                <span>Товары</span>
            </li>
            <li>
                <span>Кешбэк</span>
            </li>
        </ul>
    );
};

export default TableHeader;
