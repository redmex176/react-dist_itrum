import React, { FC } from "react";

import { Route, Routes } from "react-router-dom";

import Products from "../../pages/Products/components";
import Clients from "../../pages/Clients/components";
import Category from "../../pages/Category/components/index";
import Brands from "../../pages/Brands/components";
import Orders from "../../pages/Orders";

import styles from "../content/style.module.scss";


const Content: FC = () => {
    console.log("content");

    return (
        <div className={styles.content}>
            <Routes>
                <Route path="products" element={<Products />} />
                <Route path="clients" element={<Clients />} />
                <Route path="category" element={<Category />} />
                <Route path="brands" element={<Brands />} />
                <Route path="orders" element={<Orders />} />
            </Routes>
        </div>
    );
};

export default Content;
