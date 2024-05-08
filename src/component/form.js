import { FilePlus2, Check } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const apiClient = axios.create({
  baseURL: "https://jolly-online-store-3faac26a998e.herokuapp.com",
});

export default function Form() {
  const [doAdd, setDoAdd] = useState("");
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "Fender",
    categoryName: "Electric Guitar",
    price: "",
    stockQuantity: "",
  });

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
      setText("Some form fields are empty. Please fill in all fields.");
      return;
    }

    setDoAdd("do");
    console.log("Form Data:", formData);
    try {
      await apiClient.post(`/insertProduct`, formData);
      setDoAdd("done");
      setTimeout(() => {
        window.location.href = "/all";
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 max-w-7xl bg-white p-8 rounded-[18px] shadow-lg">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="flex space-x-2">
            <div>
              <FilePlus2 />
            </div>
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Add Data
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
                  <option>Squier</option>
                  <option>Epiphone</option>
                  <option>Evh</option>
                  <option>Blackstar</option>
                  <option>Korg</option>
                  <option>Jackson</option>
                  <option>Music Man</option>
                  <option>Sterling by MusicMan</option>
                  <option>Vox Amp</option>
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
                  <option>Piano</option>
                  <option>Keyboard</option>
                  <option>Drum</option>
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
                    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
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
                    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
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

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {doAdd === "do" && (
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
        {doAdd === "done" && (
          <div className="flex items-center mr-0">
            <Check size={28} strokeWidth={3} className="text-[#00bc91]" />
          </div>
        )}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={doAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          disabled={doAdd}
          onClick={() => (window.location.href = "/all")}
        >
          Cancel
        </button>
        {text && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white flex flex-col items-center py-8 px-12 space-y-6 rounded-md shadow-md relative">
              <div className="flex items-center space-x-4">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <p className="sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                  {text}
                </p>
              </div>
              <button
                className={`px-5 py-[7px] bg-[#df2421] hover:bg-[#ef504d] rounded-[5px] text-white sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold shadow-md `}
                style={{ whiteSpace: "nowrap" }}
                onClick={() => setText("")}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
