import React from 'react';
import TableListItem from '../Item/index';

import styles from './style.module.scss';
import { Orders } from '../../../../types/orders';

interface TableListProps {
    list: Orders[];
}

const TableList: React.FC<TableListProps> = ({ list }) => {

  return (
    <div className={styles.table__list}>
      {list.map((item: Orders) => (
        <TableListItem
              item={[]} key={item.id}
              {...item}/>   
      ))}
    </div>
  );

}

export default TableList;
