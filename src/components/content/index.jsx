import { Route, Routes } from 'react-router-dom';

import Products from '../../pages/Products/components';
import Clients from '../../pages/Clients/components';

import styles from '../content/style.module.scss'

function Content() {
    console.log('content');
    
    return (
        <div className={styles.content}>
            <Routes>
                <Route path='products' element={<Products/>}/>
                <Route path='clients' element={<Clients/>}/>
            </Routes>
        </div>
    );
}

export default Content;
