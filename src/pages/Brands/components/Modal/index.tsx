import styles from './style.module.scss';

interface ModalProps {
    inputEditValue: string;
    isActive: boolean;  
    handleCloseModal: () => void;
    handleDeleteItem: () => void;
}

const Modal: React.FC<ModalProps> = ({inputEditValue, handleCloseModal, handleDeleteItem}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__wrapp}>
                <p><span>Вы действительно хотите удалить бренд?</span></p>
                <p className={styles.brands__name}>{inputEditValue}</p>
                <button
                    onClick={handleDeleteItem}
                >Удалить</button>
                <button 
                    onClick={handleCloseModal}
                >Отменить удаление</button>
            </div>
        </div>
    );
}

export default Modal;