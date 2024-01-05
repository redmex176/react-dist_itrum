import React from 'react';
import TableListItem from '../Item/index';

import styles from './style.module.scss';

interface ListItem {
  name: string;
  phone: string;
}

interface TableListProps {
  list: ListItem[];
}

const TableList: React.FC<TableListProps> = ({ list }) => {
  return (
    <div className={styles.table__list}>
      {list.map((item: ListItem) => (
        <TableListItem
              email={''} lastName={''} key={item.name + item.phone}
              {...item}        />
      ))}
    </div>
  );
}

export default TableList;
