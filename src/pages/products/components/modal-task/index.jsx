import { useState } from 'react';
import '../modal-task/style.scss';

function ModalTask ({addItem, newItem, setNewItem, modalTask, closeModalTask}) {
    const activeModal = modalTask ? 'show fade' : 'hide';

    return(
        <div onClick={closeModalTask}className={`modal__task ${activeModal}`}>
            <form onSubmit={addItem} className="modal__content">
                <div className="task__btns">
                    <button><span>Удалить</span></button>
                    <button><span>Сохранить</span></button>
                </div>
                <div className="form__add">
                    <ul className='form__list'>
                        <li>
                            <span>Начисление кешбека с покупки</span>
                            <input 
                                type="text" 
                                name="cashback"  
                                placeholder='20%'
                                onChange={(e) => setNewItem({ ...newItem, cashback: e.target.value })}
                            />
                        </li>
                        <li>
                            <span>Категория</span>
                            <select 
                                name="category" 
                                placeholder="Название категории"
                                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                                defaultValue="category">
                               <option value="category">Обувь</option>
                               <option value="Кроссовки">Кроссовки</option>
                               <option value="Ботинки">Ботинки</option>
                            </select>
                        </li>
                        <li>
                            <span>Подкатегории</span>
                            <select 
                                name="subCategory" 
                                placeholder="Название подкатегории"
                                onChange={(e) => setNewItem({ ...newItem, subCategory: e.target.value })}>
                               <option value="subCategory">Название подкатегории</option>
                               <option value="Название подкатегории1">Название подкатегории1</option>
                               <option value="Название подкатегории2">Название подкатегории2</option>
                            </select>
                        </li>
                        <li>
                            <span>Бренд</span>
                            <select 
                            name="brand"
                            placeholder="Название подкатегории"
                            onChange={(e) => setNewItem({ ...newItem, brand: e.target.value })}>
                               <option value="brand">Имя бренда</option>
                               <option value="Adidas">Adidas</option>
                               <option value="Nike">Nike</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default ModalTask;