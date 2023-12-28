import { ChangeEvent, useState } from "react";
import Menu from "./Menu";
import MenuList from "./List";

import styles from "./style.module.scss";
import ListItem from "./Item";
import Modal from "./Modal";

interface Brands {
    brand: string,
    img: string,
    id: number
}

const Brands = () => {
    const [brandsData, setBrandsData] = useState<Brands[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [inputEditValue, setInputEditValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const [valueImg, setValueImg] = useState("");

    console.log(brandsData);
    
    const handleAddItem = () => {
        if(inputValue.trim() !== "") {
            const newBrands: Brands = {
                brand: inputValue,
                img: valueImg,
                id: Date.now()
            }
            setBrandsData([...brandsData, newBrands]);
            setInputValue('');
            setValueImg('');
        }
       
    }

    const handleEditItem = (id: number, newBrand: string) => {
        if(inputEditValue.trim() !== '') {
            const updatedBrands = brandsData.map((brand) =>
            brand.id === id ? { ...brand, brand: newBrand, img: valueImg } : brand
          );
          setBrandsData(updatedBrands);
          setValueImg("");
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
        const updatedBrands = brandsData.filter((brand) => brand.id !== activeItemId);
        setBrandsData(updatedBrands);
        setActiveItemId(null);
      };

    const handeImgClick = (e: ChangeEvent<HTMLInputElement>) => {
        setValueImg(e.target.value.replace(/C:\\fakepath\\/g, ''))  
    }

    return (
        <div className={styles.brands__wrapp}>
            <Menu
                handeImgClick={handeImgClick}
                valueImg= {valueImg}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddItem={handleAddItem}
            />
            <MenuList/>
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
