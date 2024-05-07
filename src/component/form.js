import { FilePlus2 } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";

export default function Form() {
  const [doAdd, setDoAdd] = useState("");

  return (
    <form>
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
                    name="Product Name"
                    id="Product Name"
                    autoComplete="Product Name"
                    className="block flex-1 border rounded-md border-gray-300 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Fender ..."
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Brand"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Brand
              </label>
              <div className="mt-2">
                <select
                  id="Brand"
                  name="Brand"
                  autoComplete="Brand-name"
                  className="block w-full rounded-md border rounded-md border-gray-300 px-1 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Fender</option>
                  <option>Gibson</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="Category"
                  name="Category"
                  autoComplete="Category-name"
                  className="block w-full rounded-md border rounded-md border-gray-300 px-1 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Electric Guitar</option>
                  <option>Acoustic guitar</option>
                  <option>Bass</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Price" className="block text-sm font-medium leading-6 text-gray-900">
              Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Price"
                  id="Price"
                  autoComplete="address-level2"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                  }}
                  className="block w-full rounded-md border rounded-md border-gray-300 px-2 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Stock Quantity" className="block text-sm font-medium leading-6 text-gray-900">
                Stock Quantity
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Stock Quantity"
                  id="Stock Quantity"
                  autoComplete="address-level1"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                  }}
                  className="block w-full rounded-md border rounded-md border-gray-300 px-2 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {doAdd === "do" && (
          <div className="flex items-center mr-1">
            <svg
              className="animate-spin -ml-1 mr-[10px] h-[22px] w-[22px] text-gray-600"
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
          <div className="flex items-center mr-4">
            <Check size={28} strokeWidth={3} className="text-[#00bc91]" />
          </div>
        )}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => window.location.href = "/all"}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
