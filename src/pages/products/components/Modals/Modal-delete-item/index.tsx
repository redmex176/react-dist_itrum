import React from 'react';
import styles from'./style.module.scss';

interface Props {
    list: any,
    onDelete: any,
    closeModal: any,
    modal: boolean,   
}

const ModalProducts: React.FC<Props> = ({list, onDelete, closeModal, modal}) => {
    const count = list.filter((item: { checked: any; }) => item.checked).length ;
    const activeModal = !modal ? count > 0 ? `${styles.show} ${styles.fade}`  : styles.hide : styles.hide;

    return(
        <div className={`${styles.modal__products} ${activeModal}`}>
            <span>
                Количество выбранных позиций: {count}
                <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0_1_2679)"><path d="M6.84758 6.00008L11.0776 1.77008C11.181 1.65595 11.2366 1.50642 11.2328 1.35244C11.229 1.19847 11.1661 1.05186 11.0572 0.942948C10.9483 0.834041 10.8017 0.771185 10.6477 0.767394C10.4938 0.763603 10.3442 0.819167 10.2301 0.922583L6.00008 5.15258L1.77008 0.922583C1.65595 0.819167 1.50642 0.763603 1.35244 0.767394C1.19847 0.771185 1.05186 0.834041 0.942948 0.942948C0.834041 1.05186 0.771185 1.19847 0.767394 1.35244C0.763603 1.50642 0.819167 1.65595 0.922583 1.77008L5.15258 6.00008L0.922583 10.2301C0.819167 10.3442 0.763603 10.4938 0.767394 10.6477C0.771185 10.8017 0.834041 10.9483 0.942948 11.0572C1.05186 11.1661 1.19847 11.229 1.35244 11.2328C1.50642 11.2366 1.65595 11.181 1.77008 11.0776L6.00008 6.84758L10.2301 11.0776C10.3442 11.181 10.4938 11.2366 10.6477 11.2328C10.8017 11.229 10.9483 11.1661 11.0572 11.0572C11.1661 10.9483 11.229 10.8017 11.2328 10.6477C11.2366 10.4938 11.181 10.3442 11.0776 10.2301L6.84758 6.00008Z" fill="black"/></g><defs><clipPath id="clip0_1_2679"><rect width="12" height="12" fill="white"/></clipPath></defs></svg>
            </span>
            <div className={styles.title__delete} onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><path d="M7.05582 11.5223C6.93194 11.5257 6.81127 11.4826 6.71745 11.4015C6.62362 11.3204 6.56339 11.2071 6.54857 11.0839V7.09815C6.54857 6.96601 6.60096 6.83929 6.69423 6.74586C6.78749 6.65242 6.91398 6.59993 7.04587 6.59993C7.17777 6.59993 7.30426 6.65242 7.39752 6.74586C7.49078 6.83929 7.54318 6.96601 7.54318 7.09815V11.0839C7.53082 11.2045 7.47407 11.3163 7.38398 11.3973C7.29389 11.4784 7.1769 11.5229 7.05582 11.5223ZM10.527 11.0839V7.09815C10.527 6.96601 10.4746 6.83929 10.3813 6.74586C10.2881 6.65242 10.1616 6.59993 10.0297 6.59993C9.89781 6.59993 9.77132 6.65242 9.67805 6.74586C9.58479 6.83929 9.5324 6.96601 9.5324 7.09815V11.0839C9.53238 11.1488 9.54531 11.2131 9.57042 11.273C9.59554 11.3329 9.63233 11.3872 9.67864 11.4327C9.72495 11.4782 9.77986 11.5139 9.84014 11.5379C9.90042 11.5618 9.96487 11.5734 10.0297 11.5721C10.1599 11.5721 10.2849 11.521 10.3779 11.4297C10.4709 11.3384 10.5244 11.2143 10.527 11.0839ZM15.5001 4.9359C15.4974 5.13237 15.4177 5.3199 15.2781 5.4579C15.1385 5.59591 14.9502 5.67327 14.7541 5.67325H14.2568L12.6853 14.1927C12.6409 14.423 12.5167 14.6302 12.3348 14.7779C12.1529 14.9255 11.9248 15.0041 11.6907 14.9998H5.40477C5.17068 15.0041 4.94259 14.9255 4.76065 14.7779C4.57872 14.6302 4.4546 14.423 4.41016 14.1927L2.84862 5.62343H2.32148C2.21832 5.63551 2.11377 5.62557 2.01472 5.59428C1.91566 5.56299 1.82434 5.51105 1.74676 5.44187C1.66917 5.3727 1.60708 5.28785 1.56456 5.19292C1.52204 5.09798 1.50005 4.99511 1.50005 4.89106C1.50005 4.787 1.52204 4.68413 1.56456 4.5892C1.60708 4.49426 1.66917 4.40942 1.74676 4.34024C1.82434 4.27107 1.91566 4.21913 2.01472 4.18783C2.11377 4.15654 2.21832 4.14661 2.32148 4.15868H5.36498C5.42131 3.33616 5.77423 2.56222 6.35796 1.98108C6.9417 1.39994 7.71643 1.05126 8.53779 1C9.3609 1.04892 10.138 1.39658 10.7238 1.97795C11.3096 2.55931 11.664 3.33456 11.7205 4.15868H14.7044C14.8051 4.15047 14.9064 4.16312 15.002 4.19585C15.0977 4.22858 15.1855 4.28069 15.2602 4.34893C15.3348 4.41717 15.3947 4.50008 15.4359 4.59249C15.4772 4.68491 15.499 4.78484 15.5001 4.88608V4.9359ZM12.735 5.69318H4.37037L5.81256 13.4753H11.2929L12.735 5.69318ZM6.86684 4.15868H10.2386C10.1964 3.72209 10.0033 3.31395 9.69284 3.0047C9.38234 2.69545 8.97382 2.50448 8.53779 2.46475C8.1071 2.51101 7.70558 2.70486 7.40111 3.01351C7.09665 3.32217 6.90792 3.72669 6.86684 4.15868Z" fill="#999999"/></svg>
                <span>Удалить</span>
            </div>
        </div>
    ); 

}

export default ModalProducts;