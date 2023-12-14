import React from 'react';
import style from'../table-header/style.module.scss'

interface Props {
    handleHeaderCheckboxChange: any
}

const TableHeader: React.FC<Props> = ({handleHeaderCheckboxChange}) => {

    return(
        <ul className={style.table__header}>
            <li>
                <input type="checkbox" name="checkbox" onChange={handleHeaderCheckboxChange}/>
            </li>
            <li><span>Категория</span></li>
            <li><span>Подкатегория</span></li>
            <li><span>Бренд</span></li>
            <li><span>Товары</span></li>
            <li><span>Кешбэк</span></li>
        </ul>
    );
}

export default TableHeader;