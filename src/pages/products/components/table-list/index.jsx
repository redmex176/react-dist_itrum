import TableListItem from "../table-list-item";

import '../table-list/style.scss'
function TableList({ list, onCheckboxChange }) {
    
    const elements = list.map(item => (
        <TableListItem 
            key={item.id}
            {...item}
            onCheckboxChange={() => onCheckboxChange(item.id)}
        />
    ));

    return (
        <div className="table__list">
            {elements}
        </div>
    );
}

export default TableList;