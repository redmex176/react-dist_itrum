import React, { FC } from 'react';

import style from'./style.module.scss'

const TableHeader: FC = () => {

    console.log();
    return(
        <ul className={style.table__header}>
            <li><span>Покупатель</span></li>
            <li><span>Номер заказа</span></li>
            <li><span>Способ получения</span></li>
            <li><span>Дата оформления</span></li>
            <li><span>Сумма заказа</span></li>
            <li><span>Оплаченно</span></li>
        </ul>
    );
}

export default TableHeader;