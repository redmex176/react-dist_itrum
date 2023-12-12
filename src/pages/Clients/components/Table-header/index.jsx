import style from'../table-header/style.module.scss'

function TableHeader() {

    console.log();
    return(
        <ul className={style.table__header}>
            <li><span>ФИ</span></li>
            <li><span>Почта</span></li>
            <li><span>Телефон</span></li>
        </ul>
    );
}

export default TableHeader;