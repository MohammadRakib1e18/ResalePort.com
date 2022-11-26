import React from "react";
import { Rating } from "flowbite-react";
import { FaEye } from "react-icons/fa";

const Product = ({ product }) => {
  const {
    category_name,
    sub_category,
    rating,
    isVerified,
    location,
    resale_price,
    original_price,
    seller,
    used_duration,
    posted_time,
    title,
    image_url,
  } = product;
  const fullStar = Math.ceil(parseInt(rating));
  console.log(typeof fullStar);
  let starArray = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="card flex-col md:flex-row bg-slate-700 shadow-xl text-slate-200">
        <figure className="md:w-1/2 rounded-none ">
          <img
            className="h-full w-full object-cover  border-slate-600 border-2"
            src={image_url}
            alt={sub_category}
          />
        </figure>
        <div className="card-body py-10">
          <h2 className="card-title -mb-5 text-3xl text-blue-400">
            {sub_category}
            <div className="badge badge-primary relative -top-2 text-xs">
              NEW
            </div>
          </h2>

          <div className="divider"></div>
          <div className="-mt-6 flex flex-row">
            <p className="text-xs">
              <span className="">{category_name}</span> ||{" "}
              <span>{sub_category}</span>
            </p>
            <p className="text-sm">
              <Rating>
                {starArray.map((star) => {
                  if (star <= fullStar) {
                    return <Rating.Star key={star} />;
                  } else {
                    return <Rating.Star filled={false} key={star} />;
                  }
                })}
                <span className="ml-2 text-sm">
                  {"("}
                  {rating} out of 5{")"}
                </span>
              </Rating>
            </p>
          </div>
          <h2 className="-mt-2">
            For Sale By:{" "}
            <span className="text-xl font-semibold text-blue-200">
              {seller}
            </span>
          </h2>
          <div className="divider"></div>
          <div>
            <h2 className="text-yellow-400 md:text-4xl tracking-wide font-bold">
              Tk {resale_price}
            </h2>
            <p className="line-through text-lg text-blue-200">
              (Market Price: {original_price})
            </p>
          </div>
          <div className="my-5">
            <p className="text-semibold text-slate-400">Description:</p>
            <p>
              Bought 1 year ago. Rarely used as its my personal machine.
              <br />
              Fully Fresh & Spot Less like new.
              <br /> Market price is 55 to 65k at present
            </p>
          </div>
          <div className="space-x-5 mt-8">
            <small className="bg-slate-600 py-2 px-4 rounded-2xl">
              Post: {posted_time}
            </small>
            <small className="bg-slate-600 py-2 px-4 rounded-2xl">
              Location: {location}
            </small>
            <small className="bg-slate-600 py-2 px-4 rounded-2xl">
              Used for {used_duration} days
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
