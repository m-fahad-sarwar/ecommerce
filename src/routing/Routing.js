import React from 'react'
import Home from '../Pages/home/Home';
import Cart from '../Pages/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/login/Login';
export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter></div>
    );
}
