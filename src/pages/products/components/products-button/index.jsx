import '../products-button/style.scss';

function ProductsBtn({openModalTask}) {

    return(
        <>
            <button onClick={openModalTask} className='products__btn'>
                <span>
                    Добавить акцию
                </span>
            </button>
        </>
    );
    
}

export default ProductsBtn;