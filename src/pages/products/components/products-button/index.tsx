import React, {FC} from 'react';

import styles from'../products-button/style.module.scss';

interface Props {
    openModalTask: any
}

const ProductsBtn: React.FC<Props> = ({openModalTask}) => {

    return(
        <>
            <button onClick={openModalTask} className={styles.products__btn}>
                <span>
                    Добавить акцию
                </span>
            </button>
        </>
    );
    
}

export default ProductsBtn;