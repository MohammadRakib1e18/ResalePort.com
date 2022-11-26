import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";

const Category = ({ category }) => {
  return (
    <div>
      <div className="card text-center  bg-slate-700 shadow-xl image-full">
        <figure className="h-64">
          <img
            className="h-full w-full object-cover"
            src={category.img}
            alt={category.category_name}
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <div className="dropdown dropdown-bottom">
            <h2 className="text-3xl text-blue-300 my-5">
              {category.category_name}
            </h2>
            <CustomButton tabIndex={0}>Explore More</CustomButton>
            <ul
              tabIndex={0}
              className="space-y-2 dropdown-content text-left menu p-2 mt-2 shadow bg-slate-700 rounded-[10px] w-44 text-blue-200 text-md"
            >
              {category.categoryList.map((item, index) => (
                <Link key={index} to={`/category/${item}`}>
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
