import React from 'react';
import Category from './Category';



const Categories = () => {

    const products = [1,2,3,4,5,6];

    return (
      <section className="bg-slate-800 mt-24 p-6">
        <h2 className="text-3xl font-bold text-slate-200 -mb-3">
          Our Products Category
        </h2>
        <div className="divider"></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                products.map(product => <Category
                    key={product}
                    
                ></Category>)
            }
        </div>
      </section>
    );
};

export default Categories;