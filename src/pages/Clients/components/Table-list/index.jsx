import TableListItem from "../table-list-item";

import styles from '../table-list/style.module.scss'
function TableList({ list }) {
    
    const elements = list.map((item) => (
        
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