import { CirclePlus } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const apiClient = axios.create({
  baseURL: "https://jolly-online-store-3faac26a998e.herokuapp.com",
});

export default function Products({ clickCart }) {
  const [selectCart, setSelectCart] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const location = useLocation();

  const products = productsData;

  useEffect(() => {
    if (productsData.length === 0) {
      const url = location.pathname; // Get the current pathname from the location object
      const parts = url.split("/");
      if (parts.includes("brand")) {
        const fetchProducts = async () => {
          try {
            const response = await apiClient.get(`/brand/${parts[2]}`);
            setProductsData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchProducts();
      } else if (parts.includes("category")) {
        const fetchProducts = async () => {
          try {
            const response = await apiClient.get(`/categories/${parts[2]}`);
            setProductsData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchProducts();
      } else if (parts.includes("ntom")) {
        const fetchProducts = async () => {
          try {
            const response = await apiClient.get(`/ntom`);
            setProductsData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchProducts();
      } else if (parts.includes("mton")) {
        const fetchProducts = async () => {
          try {
            const response = await apiClient.get(`/mton`);
            setProductsData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchProducts();
      } else {
        const fetchProducts = async () => {
          try {
            const response = await apiClient.get(`/products`);
            setProductsData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchProducts();
      }
    }
  }, [productsData]);

  const handleCart = (c) => {
    setSelectCart([...selectCart, c]);
  };

  return (
    <div className="bg-[#f9f9f9] font-sans-thai">
      <div className="mx-auto">
        {productsData.length !== 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative group transition ease-in-out delay-75 hover:scale-105 rounded-[10px] bg-white shadow-md"
              >
                <div className="aspect-h-1 shadow-sm aspect-w-1 w-full overflow-hidden rounded-t-[10px] bg-gray-200 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="m-4 flex justify-between">
                  <div className="mr-4">
                    <h3 className="text-[14px] xl:text-[15px] text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.ProductName}
                      </a>
                    </h3>
                    <p className="mt-2 mb-4 mr-5 text-[13px] xl:text-[14px] text-gray-500">
                      {product.Categories} | เหลือจำนวน {product.StockQuantity}{" "}
                      ชิ้น
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-[14px] xl:text-[15px] font-semibold text-gray-800">
                    {"฿ " + parseInt(product.Price)}
                  </p>
                </div>
                {clickCart && (
                  <div className="absolute bottom-0 right-0 m-4 space-x-2">
                    <button
                      type="button"
                      className=" relative shadow-md rounded-[10px] opacity-80 bg-gradient-to-tr from-[#4eb9f7] to-[#353cc3] p-2 text-white scale-0 focus:outline-none transition ease-linear delay-100 group-hover:scale-100"
                      onClick={() =>
                        handleCart([
                          product.ProductID,
                          product.ProductName,
                          product.Brand,
                          product.Categories,
                          product.Price,
                          product.StockQuantity,
                        ])
                      }
                    >
                      <CirclePlus
                        size={21}
                        className={`w-[20px] lg:w-[21px] transition-colors duration-200 ease-in-out`}
                      />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="col-start-3 col-span-3 flex justify-center items-center w-full h-[70vh]">
            <div className="flex items-center py-2 px-4 border border-transparent text-[13px] md:text-[14px] lg:text-[16px] font-medium rounded-md shadow-md text-gray-100 bg-gradient-to-tr from-[#1e92d5] to-[#3d45cb]">
              <svg
                className="animate-spin -ml-1 mr-[10px] h-[22px] w-[22px] text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-100"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              กำลังโหลดข้อมูล...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
