import TableListItem from "../table-list-item";

import styles from '../table-list/style.module.scss'
function TableList({ list, onCheckboxChange }) {
    
    const elements = list.map(item => (
        <TableListItem 
            key={item.id}
            {...item}
            onCheckboxChange={() => onCheckboxChange(item.id)}
        />
    ));

    return (
        <div className={styles.table__list}>
            {elements}
        </div>
    );
}

export default TableList;