import { useState } from "react";
import Menu from "./Menu";
import MenuList from "./List";

import {useAppSelector, useAppDispatch} from '../../../redux/hooks/hooks';
import {addBrand, editBrand, deleteBrand} from "../../../redux/actionsBrands";

import styles from "./style.module.scss";
import ListItem from "./Item";
import Modal from "./Modal";

interface Brands {
    brand: string,
    img: FileList | null,
    id: number
}

const Brands = () => {
    const brandsData = useAppSelector((state) => state.brands);
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState("");
    const [inputEditValue, setInputEditValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [activeItemId, setActiveItemId] = useState(0);
    const [valueImg, setValueImg] = useState<any>("");
    const [titleImg, setTitleImg] = useState('');
    
    const handleAddItem = () => {
        if(inputValue.trim() !== "") {
            dispatch(addBrand(inputValue, valueImg, Date.now()));
            setInputValue('');
            setValueImg('');
            setTitleImg('');
        }
    }

    const handleEditItem = (id: number, newBrand: string) => {
        if (inputEditValue.trim() !== '' ) {
            dispatch(editBrand(id, newBrand, valueImg));
          setInputEditValue('');
          setValueImg('');
          setTitleImg('')
        }
        
      };
    
      const handleOpenModal = () => {
        setIsActive(true);
      };
   
      const handleCloseModal = () => {
        setIsActive(false);
      };

      const handleDeleteItem = () => {
        setIsActive(false);
        dispatch(deleteBrand(activeItemId));
        setActiveItemId(0);
      };

    const handeImgClick = (e:any) => {
        setValueImg(e.target.files[0]);
      
        const newValue = e.target.files[0].name;
        setTitleImg(newValue);
    }

    return (
        <div className={styles.brands__wrapp}>
            <Menu
                handeImgClick={handeImgClick}
                titleImg = {titleImg}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddItem={handleAddItem}
            />
            <MenuList/>
            {brandsData.length > 0 ? 
                <ListItem
                isEdit = {isEdit}
                setIsEdit={setIsEdit}
                brandsData={brandsData}
                onEditItem={handleEditItem}
                handleOpenModal={handleOpenModal}
                inputEditValue={inputEditValue}
                setInputEditValue={setInputEditValue}
                activeItemId = {activeItemId}
                setActiveItemId = {setActiveItemId}
             /> 
             :
             <p>Здесь пока нет брендов</p>
            }
            {isActive ?  
            <Modal
                inputEditValue={inputEditValue}
                isActive={isActive}
                handleCloseModal={handleCloseModal}
                handleDeleteItem= {handleDeleteItem}
            /> : ''}
        </div>
    );
};

export default Brands;
