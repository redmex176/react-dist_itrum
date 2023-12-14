import {BrowserRouter} from 'react-router-dom';

import Navigation from './components/navigation/index';
import Content from './components/content';

import styles from './app.module.scss';

function App() {
    return (
      <BrowserRouter>
        <main className={styles.main}>
            <Navigation/>
            <Content/>
        </main>
      </BrowserRouter>   
    );
}    

export default App;