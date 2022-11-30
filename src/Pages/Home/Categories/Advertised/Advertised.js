import React from 'react';

const Advertised = ({product}) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="card bg-slate-600 shadow-xl"
      >
        <figure className="h-64">
          <img
            className="h-full w-full object-cover"
            src={product.image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product?.title}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Advertised;