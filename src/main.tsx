import ReactDOM from "react-dom/client";
import React from "react";
import store from './redux/store';

import { Provider } from "react-redux";

import App from "./App";

import "./style/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <Provider store={store}>
        <App />
    </Provider> 
);
