import React from "react";
import TableListItem from "../Table-list-item";

import styles from '../table-list/style.module.scss';

interface Props {
    list: any,
    onCheckboxChange: any
}

const TableList = ({ list, onCheckboxChange }) => {
    
   

    return (
        <div className={styles.table__list}>
            {list.map((item: { id: any; }) => (
                <TableListItem 
                    category={""} subCategory={""} brand={""} products={""} cashback={""} checked={false} key={item.id}
                    {...item}
                    onCheckboxChange={() => onCheckboxChange(item.id)}/>
                ))}
        </div>
    );
}

export default TableList;