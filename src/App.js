import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/routes";

function App() {
  const [showOffer, setShowOffer] = useState(true);

  return (
    <div className="main-container">
      {showOffer && (
        <div className="relative">
          <section className="flex justify-around marque-effect bg-slate-900 text-slate-200">
            <p className="">
              <span className="text-2xl font-semibold text-red-400">20%</span>{" "}
              free on every product!
            </p>
            <p className="">
              <span className="text-2xl font-semibold text-red-400">20%</span>{" "}
              free on every product!
            </p>
            <p className="">
              <span className="text-2xl font-semibold text-red-400">20%</span>{" "}
              free on every product!
            </p>
          </section>
          <button
            onClick={() => setShowOffer(false)}
            className="absolute bg-red-500 px-2 rounded-full text-gray-200 top-1 right-1"
          >
            X
          </button>
        </div>
      )}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
