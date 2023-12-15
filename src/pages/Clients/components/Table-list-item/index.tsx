import React, { FC } from 'react';
import styles from '../table-list-item/style.module.scss';

interface Props {
  email: string,
  phone: string,
  name: string,
  lastName: string
};

const TableListItem: React.FC<Props> = ({email, phone, name, lastName}) => {

    function formatPhoneNumber(phoneNumber :string) {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');

        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (!match) {
          return phoneNumber;
        }
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
      }
      const formattedPhoneNumber = formatPhoneNumber(phone);
      
    return(
        <ul className={styles.list__item}>
            <li><span>{name} {lastName}</span></li>
            <li><span>{email}</span></li>
            <li><span>{formattedPhoneNumber}</span></li>
        </ul>
    );
}

export default TableListItem;