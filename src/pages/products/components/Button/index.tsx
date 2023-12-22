import React from "react";

import styles from "./style.module.scss";

interface ProductsBtnProps {
    openModalTask: any;
}

const ProductsBtn: React.FC<ProductsBtnProps> = ({ openModalTask }) => {
    return (
        <>
            <button onClick={openModalTask} className={styles.products__btn}>
                <span>Добавить акцию</span>
            </button>
        </>
    );
};

export default ProductsBtn;
