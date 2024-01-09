import React from "react";
import styles from "./style.module.scss";
import { Orders } from "../../../../types/orders";


interface TableListItemProps {
    item: Orders[];
    id: string;
    order_type: string;
    total: number;
    isViewedByAdmin: boolean;
    order_number: string;
    delivery_type: string;
    isPayed: boolean;
    user: {
      id: string | null;
      name: string | null;
      lastName: string | null;
      secondName: string | null;
      firmName: string | null;
      role: string | null;
    };
    warehouse: { city: string };
    date: string;
}

const TableListItem: React.FC<TableListItemProps> = (item) => {

    return (
        <ul className={styles.list__item}>
            <li>
                <span>
                   {item.user.name} {item.user.lastName}
                </span>
            </li>
            <li>
                <span>{item.order_number}</span>
            </li>
            <li>
               {item.delivery_type == 'DELIVERY' ? <span>Доставка</span> : <span>Самовывоз</span>}
            </li>
            <li>
                <span>{item.date}</span>
            </li>
            <li>
                <span>{Math.ceil(item.total)} ₽</span>
            </li>
            <li>
                {item.isPayed ? <span>Да</span> : <span>Нет</span>}
            </li>
        </ul>
    );
};

export default TableListItem;
