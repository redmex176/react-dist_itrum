import React, { FC } from 'react';

import TableListItem from "../Table-list-item/index";

import styles from '../table-list/style.module.scss';

interface Props {
    list: any 
}

const TableList: React.FC<Props>= ({ list }) => {
    
    return (
        <div className={styles.table__list}>
            {list.map((item : any) => (
                <TableListItem 
                    key={item.name+item.phone}
                    {...item}
                />
            ))}
        </div>
    );
}

export default TableList;

