
import styles from './style.module.scss';
import ImgDefault from '../../../../assets/img/img_brands-default.svg?react';
import EditSvg from '../../../../assets/icon/edit.svg?react';
import TrashSvg from '../../../../assets/icon/trash.svg?react';
import SaveSvg from '../../../../assets/icon/done.svg?react';
import CloseSvg from '../../../../assets/icon/close.svg?react';

interface Brands {
  brand: string;
  img: Blob | MediaSource;
  id: number;
}

interface ListItemProps {
  brandsData: Brands[];
  onEditItem: (id: number, newBrand: string) => void;
  handleOpenModal: (id: number) => void;
  inputEditValue: string,
  setInputEditValue:(brand: string) => void,
  isEdit: boolean;
  setIsEdit: (el: boolean) => void;
  activeItemId: number | null;
  setActiveItemId: (el: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  brandsData,
  onEditItem,
  handleOpenModal,
  inputEditValue,
  setInputEditValue,
  isEdit,
  setIsEdit,
  activeItemId,
  setActiveItemId,
}) => {
  
  const handleEditClick = (id: number, brand: string) => {
    
    setIsEdit(true);
    setActiveItemId(id);
    setInputEditValue(brand);

  };

  const handleSaveClick = (id: number) => {
    onEditItem(id, inputEditValue);
    setIsEdit(false);
  };

  const handleCancelClick = () => {
     setIsEdit(false);
     setInputEditValue("");
  };


  const elements = brandsData.map((item) => (
    
    <li
    onClick={() => {
        setActiveItemId(item.id);
        setInputEditValue(item.brand)} }
    key={item.id}>
      <div className={isEdit && activeItemId === item.id ? `${styles.img__active} ${styles.img__brands}` : styles.img__brands}>
        {/* <ImgDefault /> */}
        {item.img ? (
            <img  src={URL.createObjectURL(item.img)}/>
        ) : (
            <ImgDefault/>
        )}
      </div>
      <label className={isEdit && activeItemId === item.id ? '' : styles.hide} htmlFor="file-input">
            <input id="file-input" type="file" name="file"/>
      </label>
      {isEdit && activeItemId === item.id ? (
        <>
          <input
            autoFocus
            type="text"
            value={inputEditValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputEditValue(e.target.value)
            }
            onKeyDown={(e) => {
                if(e.key === "Enter") {
                    handleSaveClick(item.id);
                }
            }} 
          />
          <SaveSvg onClick={() => handleSaveClick(item.id)} />
          <CloseSvg onClick={handleCancelClick} />
        </>
      ) : (
        <>
          <p>{item.brand}</p>
          <EditSvg onClick={() => handleEditClick(item.id, item.brand)} />
          <TrashSvg onClick={() => handleOpenModal(item.id)} />
        </>
      )}
    </li>
  ));

  return <ul className={styles.brands__list}>{elements}</ul>;
};

export default ListItem;
