
import { Routes, Route, Navigate } from "react-router-dom";


import HomePage from "@/screen/HomePage";
import CheckoutPage from "@/screen/Checkout";
import ProductDetail from "@/screen/PrudutcDetail"; 
import CartPage from "@/screen/Cart";
import ProductListPage from "../components/ProductListPage";
import AdminPage from "@/screen/AdminPage";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />

     
            <Route path="/products/:pageNumber" element={<ProductListPage />} />

            <Route path="/products" element={<Navigate to="/products/1" />} />
            
            <Route path="/admin" element={<AdminPage />} />
            
        </Routes>
    );
}

export default Rotas;