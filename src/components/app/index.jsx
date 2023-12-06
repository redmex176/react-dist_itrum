import {BrowserRouter} from 'react-router-dom';

import './style.scss';

import Navigation from '../navigation/index';
import Content from '../content';


function App() {
    return (
      <BrowserRouter>
        <main className='main'>
            <Navigation/>
            <Content/>
        </main>
      </BrowserRouter>   
    );
}    

export default App;
