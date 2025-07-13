import { Routes, Route } from "react-router-dom";

import HomePage from "@/screen/HomePage";
import CheckoutPage from "@/screen/Checkout";

import ProductDetail from "@/screen/PrudutcDetail"; 
import CartPage from "@/screen/Cart";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element ={<CartPage/>}/>
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    );
}

export default Rotas;