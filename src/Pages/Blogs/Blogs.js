import React, { useState } from "react";

const Blogs = ({setShow}) => {
  
  return (
    <div>
      <div className="mt-24 text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Jun 1, 2020</span>
            <button
              href=" "
              className="px-2 py-1 font-bold rounded bg-slate-500 text-gray-900"
            >
              Javascript
            </button>
          </div>
          <div className="mt-3">
            <h1 className="text-2xl font-bold">
              Nos creasse pendere crescit angelos etc
            </h1>
            <p className="mt-2">
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="hover:underline text-violet-400"
              onClick={()=>{setShow(true)}}
            >
              Read more
            </button>
            <div>
              <p className="flex items-center cursor-pointer">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-400">
                  Leroy Jenkins
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
