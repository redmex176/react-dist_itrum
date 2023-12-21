import React from "react";
import TableListItem from "./";

import styles from './style.module.scss';

interface ListItem {
  id: any;
  category: string;
  subCategory: string;
  brand: string;
  products: string;
  cashback: string;
}

interface TableListProps {
  list: ListItem[];
  onCheckboxChange: (id: any) => void;
}

const TableList: React.FC<TableListProps> = ({ list, onCheckboxChange }) => {
  return (
    <div className={styles.table__list}>
      {list.map((item: ListItem) => (
        <TableListItem
              list={[]} key={item.id}
              {...item}
              onCheckboxChange={() => onCheckboxChange(item.id)}        />
      ))}
    </div>
  );
}

export default TableList;
