import { Trash2, FilePenLine, Check } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Delete from "../component/dialogs";
import { useLocation } from "react-router-dom";

const apiClient = axios.create({
  baseURL: "https://jolly-online-store-3faac26a998e.herokuapp.com",
});

export default function Products() {
  const [selectDelete, setSelectDelete] = useState([]);
  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    brandName: "Fender",
    categoryName: "Electric Guitar",
    price: "",
    stockQuantity: "",
  });
  const [showEdit, setShowEdit] = useState(false);
  const [doEdit, setDoEdit] = useState("");
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

  const handleDelete = (deleteData) => {
    setSelectDelete(deleteData);
  };

  const handleEdit = (edit) => {
    const [productId, productName, brand, categories, price, stockQuantity] =
      edit;

    setFormData({
      productId: productId,
      productName: productName,
      brandName: brand,
      categoryName: categories,
      price: price,
      stockQuantity: stockQuantity,
    });
    setShowEdit(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyValueNull = Object.values(formData).some(
      (value) => value === null || value === ""
    );

    if (isAnyValueNull) {
      return;
    }

    setDoEdit("do");
    console.log("Form Data:", formData);
    try {
      await apiClient.post(`/products/` + formData.productId, formData);
      setDoEdit("done");
      setTimeout(() => {
        window.location.href = "/all";
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
                <div className="absolute bottom-0 right-0 m-4 space-x-2">
                  <button
                    type="button"
                    className=" relative shadow-md rounded-[10px] opacity-80 bg-gradient-to-tr from-[#4eb9f7] to-[#353cc3] p-2 text-white scale-0 focus:outline-none transition ease-linear delay-100 group-hover:scale-100"
                    onClick={() =>
                      handleEdit([
                        product.ProductID,
                        product.ProductName,
                        product.Brand,
                        product.Categories,
                        product.Price,
                        product.StockQuantity,
                      ])
                    }
                  >
                    <FilePenLine
                      size={21}
                      className={`w-[20px] lg:w-[21px] transition-colors duration-200 ease-in-out`}
                    />
                  </button>
                  <button
                    type="button"
                    className=" relative shadow-md rounded-[10px] opacity-80 bg-gradient-to-tr from-[#ffbb46] to-[#df2421] p-2 text-white scale-0 focus:outline-none transition ease-linear delay-100 group-hover:scale-100"
                    onClick={() =>
                      handleDelete([product.ProductID, product.ProductName])
                    }
                  >
                    <Trash2
                      size={21}
                      className={`w-[20px] lg:w-[21px] transition-colors duration-200 ease-in-out`}
                    />
                  </button>
                </div>
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
      {selectDelete.length !== 0 && (
        <Delete select={selectDelete} setSelect={setSelectDelete} />
      )}
      {showEdit && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white flex flex-col items-center pt-2 pb-5 px-2 space-y-6 rounded-[18px] shadow-md relative">
            <form onSubmit={handleSubmit}>
              <div className="space-y-12 max-w-7xl bg-white p-8 rounded-[18px] shadow-lg">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="flex space-x-2">
                    <div>
                      <FilePenLine />
                    </div>
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">
                      Edit Data
                    </h2>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="Product Name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Product Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm sm:max-w-md">
                          <input
                            type="text"
                            name="productName"
                            id="productName"
                            value={formData.productName}
                            onChange={handleInputChange}
                            className="block flex-1 border rounded-md border-gray-300 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="Fender ..."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="brandName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Brand
                      </label>
                      <div className="mt-2">
                        <select
                          id="brandName"
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border rounded-md border-gray-300 px-1 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Fender</option>
                          <option>Gibson</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="categoryName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Category
                      </label>
                      <div className="mt-2">
                        <select
                          id="categoryName"
                          name="categoryName"
                          value={formData.categoryName}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border rounded-md border-gray-300 px-1 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Electric Guitar</option>
                          <option>Acoustic guitar</option>
                          <option>Bass</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="Price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ); // Remove non-numeric characters
                          }}
                          value={formData.price}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border rounded-md border-gray-300 px-2 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Stock Quantity"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Stock Quantity
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="stockQuantity"
                          id="stockQuantity"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ); // Remove non-numeric characters
                          }}
                          value={formData.stockQuantity}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border rounded-md border-gray-300 px-2 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 mr-4 flex items-center justify-end gap-x-6">
                {doEdit === "do" && (
                  <div className="flex items-center mr-0">
                    <svg
                      className="animate-spin -ml-1 mr-[0px] h-[22px] w-[22px] text-gray-600"
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
                  </div>
                )}
                {doEdit === "done" && (
                  <div className="flex items-center mr-0">
                    <Check
                      size={28}
                      strokeWidth={3}
                      className="text-[#00bc91]"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={doEdit}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  disabled={doEdit}
                  onClick={() => {
                    setFormData({
                      productId: "",
                      productName: "",
                      brandName: "Fender",
                      categoryName: "Electric Guitar",
                      price: "",
                      stockQuantity: "",
                    });
                    setShowEdit(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
