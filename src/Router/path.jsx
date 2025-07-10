
import { Routes, Route } from "react-router-dom";
import HomePage from "@/screen/HomePage";
import CheckoutPage from "@/screen/Checkout";

const Rotas = () => {
    return (
       
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
    );
}

export default Rotas;