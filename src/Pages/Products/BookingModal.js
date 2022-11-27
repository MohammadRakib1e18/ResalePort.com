import React, { useState } from 'react';

const BookingModal = ({show, setShow, productInfo}) => {
    // console.log('modal-info: ', productInfo);
    // const [closeModal, setCloseModal] = useState(show);

    console.log(show);

    if(productInfo && show){
        return (
          <div>
            <input
              type="checkbox"
              id="purchase-modal"
              className="modal-toggle "
            />
            <div className="modal bg-gray-900/90">
              <div className="modal-box relative text-slate-200 bg-slate-700">
                <label
                  htmlFor="purchase-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-3xl font-bold text-blue-400">
                  {productInfo?.title}
                </h3>
                <div className="divider"></div>

                <p className="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>

                <div className="w-full">
                  <label
                    onClick={() => {
                      setShow(false);
                    }}
                    className="w-full mt-5 btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl border-none text-slate-100"
                  >
                    Complete Order
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default BookingModal;