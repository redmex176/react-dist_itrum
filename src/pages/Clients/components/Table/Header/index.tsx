import React, { FC } from 'react';

import style from'./style.module.scss'

const TableHeader: FC = () => {

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