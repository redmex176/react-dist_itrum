import '../table-list-item/style.scss';

function TableListItem(props) {

    const {category, subCategory, brand, products, cashback, checked, onCheckboxChange } = props;

    return(
        <ul className='list__item'>
            <li>
                <input type="checkbox" name="checkbox"  checked={checked} onChange={onCheckboxChange}/>
            </li>
            <li><span>{category}</span></li>
            <li><span>{subCategory}</span></li>
            <li><span>{brand}</span></li>
            <li><span>{products}</span></li>
            <li><span>{cashback}%</span></li>
        </ul>
    );
}
export default TableListItem; 