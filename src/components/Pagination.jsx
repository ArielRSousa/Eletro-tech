import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagination = ({ totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const baseLinkStyle = "py-2 px-4 border border-gray-300 rounded-md transition-colors duration-200";
  const activeLinkStyle = "bg-blue-600 text-white border-blue-600 font-bold";
  const inactiveLinkStyle = "bg-white text-blue-600 hover:bg-gray-100";

  return (
    <nav className="flex justify-center items-center gap-2 my-8">
      {pages.map((page) => (
        <NavLink
          key={page}
          to={`/products/${page}`}
          className={({ isActive }) =>
           
            `${baseLinkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          {page}
        </NavLink>
      ))}
    </nav>
  );
};

export default Pagination;