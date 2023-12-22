import React from "react";

import styles from "./style.module.scss";

import CloseModal from "../../../../../assets/icon/close-modal.svg?react";
import TrashModal from "../../../../../assets/icon/trash-modal.svg?react";

interface ModalProductsProps {
    list: any;
    onDelete: any;
    closeModal: any;
    modal: boolean;
}

const ModalProducts: React.FC<ModalProductsProps> = ({
    list,
    onDelete,
    closeModal,
    modal,
}) => {
    const count = list.filter((item: { checked: any }) => item.checked).length;
    const activeModal = !modal
        ? count > 0
            ? `${styles.show} ${styles.fade}`
            : styles.hide
        : styles.hide;

    return (
        <div className={`${styles.modal__products} ${activeModal}`}>
            <span>
                Количество выбранных позиций: {count}
                <CloseModal onClick={closeModal} />
            </span>
            <div className={styles.title__delete} onClick={onDelete}>
                <TrashModal />
                <span>Удалить</span>
            </div>
        </div>
    );
};

export default ModalProducts;
