import '../table-header/style.scss'

function TableHeader({handleHeaderCheckboxChange}) {

    console.log();
    return(
        <ul className="table__header">
            <li>
                <input type="checkbox" name="checkbox" onChange={handleHeaderCheckboxChange}/>
            </li>
            <li><span>Категория</span></li>
            <li><span>Подкатегория</span></li>
            <li><span>Бренд</span></li>
            <li><span>Товары</span></li>
            <li><span>Кешбэк</span></li>
        </ul>
    );
}

export default TableHeader;