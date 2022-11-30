import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import CustomLoading from "../../../../Components/CustomButton";
import Advertised from "./Advertised";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AdvertisedHub = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `https://assignment12-server-ivory.vercel.app/advertisedProducts`;

  const { data: advertisedProducts = [], isLoading } = useQuery({
    queryKey: ["advertisedProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || loading) {
    return <CustomLoading></CustomLoading>;
  }
  return (
    <>
      {advertisedProducts.length && (
        <section className="bg-slate-800 mt-24 p-6">
          <h2 className="text-4xl font-bold text-slate-200 -mb-3">
            Our Advertised Products
          </h2>
          <div className="divider"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {advertisedProducts.map((product) => (
              <Advertised key={product._id} product={product}></Advertised>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default AdvertisedHub;
