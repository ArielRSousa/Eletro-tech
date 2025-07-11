import { Routes, Route } from "react-router-dom";

import HomePage from "@/screen/HomePage";
import CheckoutPage from "@/screen/Checkout";

import ProductDetail from "@/screen/PrudutcDetail"; 

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    );
}

export default Rotas;