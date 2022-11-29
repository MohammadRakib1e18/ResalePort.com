import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import CustomLoading from "../../Components/CustomLoading";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `http://localhost:5000/order?email=${user?.email}`;

  const { data: orders = {}, isLoading, refetch } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || loading) {
    return <CustomLoading></CustomLoading>;
  }

  const deleteOrder= (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order Cancelled");
        refetch();
      });
  };

  return (
    <div className="mt-3 mx-5">
      <h2 className="text-4xl font-bold text-slate-200 -mb-3">My Orders</h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {orders.map((order) => (
          <div className="card bg-slate-700 text-slate-200 shadow-xl">
            <figure className="h-64 w-full border-2 rounded-2xl border-slate-400 mx-auto">
              <img
                src={order.image_url}
                className=" h-full w-full object-cover"
                alt="user"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">Name : {order.title}</h2>
              <h5 className="">Email: {order.email}</h5>
              <p><small>Ordered:{order.ordered_date}</small></p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    deleteOrder(order._id);
                  }}
                  className="py-2 px-5 rounded-none bg-red-500 hover:bg-red-700 text-slate-200 "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
