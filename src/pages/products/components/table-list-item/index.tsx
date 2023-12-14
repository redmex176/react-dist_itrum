import React from 'react';
import styles from '../table-list-item/style.module.scss';

interface Props {
    category: string,
    subCategory: string,
    brand: string,
    products: string,
    cashback: string,
    checked: boolean,
    onCheckboxChange: any
}

const TableListItem: React.FC<Props> = ({category, subCategory, brand, products, cashback, checked, onCheckboxChange }) => {

    return(
        <ul className={styles.list__item}>
            <li>
                <input type="checkbox" name="checkbox"  checked={checked} onChange={onCheckboxChange}/>
            </li>
            <li><span>{category}</span></li>
            <li><span>{subCategory}</span></li>
            <li><span>{brand}</span></li>
            <li><span>{products}</span></li>
            <li><span>{cashback}%</span></li>
        </ul>
    );
}
export default TableListItem; 