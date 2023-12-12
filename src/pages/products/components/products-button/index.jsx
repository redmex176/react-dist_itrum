import styles from'../products-button/style.module.scss';

function ProductsBtn({openModalTask}) {

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