import {BrowserRouter} from 'react-router-dom';

import Navigation from './components/navigation/index';
import Content from './components/content';


import './app.scss';

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
