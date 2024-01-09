import React from "react";

import styles from "./style.module.scss";

interface ModalTaskProps {
    modalOrders: boolean;
}

const ModalOrders: React.FC<ModalTaskProps> = ({
    modalOrders
}) => {
    const activeModal = modalOrders
        ? `${styles.show} ${styles.fade}`
        : styles.hide;

    return (
        <div
         
            className={`${styles.modal__task} ${activeModal}`}
        >
            <form className={styles.modal__content}>
                <div className={styles.task__btns}>
                    <button>
                        <span>Закрыть</span>
                    </button>
                    <button>
                        <span>Подтвердить</span>
                    </button>
                </div>
                <div className={styles.form__add}>
                    <ul className={styles.form__list}>
                        <li>
                            <span>Заказчик</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="20%"
                                
                            />
                        </li>
                        <li>
                            <span>Номер заказа</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="20%"
                                
                            />
                        </li>
                        <li>
                            <span>Дата оформления</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="20%"
                                
                            />
                        </li>
                        <li>
                            <span>Способ оплаты</span>
                            <select
                                name="category"
                                placeholder="Название категории"
                                
                                defaultValue="category"
                            >
                                <option value="category">Наличными курьеру</option>
                                <option value="Online">Онлайн</option>
                            </select>
                        </li>
                        <li>
                            <span>Способ получения</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="Самовывоз"
                            />
                        </li>
                        <li>
                            <span>Пункт самовывоза</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="Ростов на дону"
                            />
                        </li>
                        <li>
                            <span>Дополнительная информация</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="Какая то информация"
                            />
                        </li>
                        <li>
                            <span>Дополнительная информация по оплате</span>
                            <input
                                type="text"
                                name="cashback"
                                placeholder="Какая то информация"
                            />
                        </li>
                        <div className={styles.products}>
                            <span>Товары</span>
                            <ul>
                                <li>
                                    <span>Kosmoteros Personnel </span>
                                    <span>SKU0002</span></li>
                                <li>
                                    <span>Количество</span>
                                    <span>1</span></li>
                                <li>
                                    <span>Биостимулирующий дневной крем</span>
                                    </li>
                                <li>
                                    <span>100мл</span>
                                    <span>4 567 ₽</span></li>
                            </ul>
                            <button>Изменить</button>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <span>Сумма заказа</span>
                                </li>
                                <li>
                                    <span>Товары</span>
                                    <span>9 134 ₽</span>
                                </li>
                                <li>
                                    <span>Скидка</span>
                                    <span>888 ₽</span>
                                </li>
                                <li>
                                    <span>Сумма начисленных бонусов</span>
                                    <span>888 </span>
                                </li>
                                <li>
                                    <span>Итого</span>
                                    <span>8 242 ₽</span>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default ModalOrders;
