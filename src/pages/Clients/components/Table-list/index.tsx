import React, { FC } from 'react';

import TableListItem from "../Table-list-item/index";

import styles from '../table-list/style.module.scss';

interface Props {
    list: any 
}

const TableList: React.FC<Props>= ({ list }) => {
    
    const elements = list.map((item : any) => (
        
        <TableListItem 
            key={item.name+item.phone}
            {...item}
        />
    ));

    return (
        <div className={styles.table__list}>
            {elements}
        </div>
    );
}

export default TableList;

