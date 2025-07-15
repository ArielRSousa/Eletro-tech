import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import allProducts from '../data/products';
import ProductList from '../screen/ProductList';
import Pagination from '../components/Pagination';

const ProductPage = () => {
  const { pageNumber = '1' } = useParams();
  const currentPage = parseInt(pageNumber, 10);

  const productsPerPage = 25; 
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (currentPage < 1 || isNaN(currentPage) || currentPage > totalPages) {
    return <Navigate to="/products/1" />;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  return (
    
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
        Nossos Produtos
      </h1>
      <p className='text-center text-gray-600 mb-8'>Página {currentPage} de {totalPages}</p>
      
      <Pagination totalPages={totalPages} />
      <ProductList products={currentProducts} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductPage;