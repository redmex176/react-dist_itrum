import { Route, Routes } from 'react-router-dom';
import Products from '../../pages/products/components';

import '../content/style.scss'

function Content() {
    console.log('content');
    
    return (
        
        <div className='content'>
            <Routes>
                <Route path='products' element={<Products/>}/>
                {/* <Route path='clients' element={<Clients/>}/> */}
            </Routes>
        </div>
    );
}

export default Content;
