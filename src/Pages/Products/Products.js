import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
      <div className="mt-24">
        <h2 className="text-3xl text-slate-200 -mb-3">
          {products[0].category_name}
        </h2>
        <div className="divider"></div>
        <div className="grid grid-cols-1 gap-6 sm:w-5/6 mx-auto">
            {
                products.map((product,index) =><Product
                    key={index}
                    product={product}
                ></Product>)
            }
        </div>
      </div>
    );
};

export default Products;