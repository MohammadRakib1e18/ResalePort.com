
import React from 'react';
import CustomButton from '../../../Components/CustomButton';

const Category = () => {
    return (
      <div>
        <div className="card text-center  bg-slate-700 shadow-xl image-full">
          <figure className="w-full h-42">
            <img
              className="w-full"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="dropdown dropdown-hover">
              <h2 className="text-4xl text-blue-400 my-5">Shoes!</h2>
              <CustomButton tabIndex={0}>Explore More</CustomButton>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 mt-2 shadow bg-slate-700 rounded-[10px] w-44"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Category;