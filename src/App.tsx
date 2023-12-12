import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './components/Navigation';
import Content from './components/Content';

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
