import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  PackageSearch,
  SquarePlus,
  SquareMinus,
  ShoppingCart,
} from "lucide-react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import Product from "../product";
import axios from "axios";
import { useLocation } from "react-router-dom";

const apiClient = axios.create({
  baseURL: "https://jolly-online-store-3faac26a998e.herokuapp.com",
});

const sortOptions = [
  { name: "None", href: "/all", current: true },
  { name: "Price: Low to High", href: "/ntom", current: true },
  { name: "Price: High to Low", href: "/mton", current: true },
];
const subCategories = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const location = useLocation();
  const url = location.pathname;
  const partsBefore = url.split("/");
  const parts = partsBefore.map((item) => item.replace(/%20/g, " "));
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [cart, setCart] = useState(false);

  const filters = [
    {
      id: "Brand",
      name: "ยี่ห้อ / Brand",
      options: brandData,
    },
    {
      id: "Type",
      name: "ชนิดสินค้า / Product Type",
      options: categoriesData,
    },
  ];

  useEffect(() => {
    if (categoriesData.length === 0) {
      const fetchCategories = async () => {
        try {
          const response = await apiClient.get(`/categories`);
          setCategoriesData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchCategories();
    }
  }, [categoriesData]);

  useEffect(() => {
    if (brandData.length === 0) {
      const fetchBrand = async () => {
        try {
          const response = await apiClient.get(`/brand`);
          setBrandData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchBrand();
    }
  }, [brandData]);

  return (
    <div className="bg-[#f9f9f9]">
      <div className="flex justify-center">
        <div className="max-w-[100rem]">
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl z-60">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-0 font-medium text-gray-900 border-b border-gray-200"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <a
                                      href={`${
                                        section.name === "ยี่ห้อ / Brand"
                                          ? "/brand/" + option.Name
                                          : section.name ===
                                            "ชนิดสินค้า / Product Type"
                                          ? "/category/" + option.Name
                                          : option.Name
                                      }`}
                                      key={option.Name}
                                      className="flex items-center"
                                    >
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.Name}
                                      </label>
                                    </a>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center lg:items-baseline justify-between border-b border-gray-200 pb-6 pt-14">
              <h1 className="flex text-3xl font-bold tracking-tight text-gray-900 px-3">
                <PackageSearch size={32} className="mr-3" /> All Products
              </h1>

              <button
                type="button"
                className="ml-auto mr-3 relative shadow-md rounded-[10px] bg-gray-900 p-2 text-gray-300 hover:text-white focus:outline-none transition ease-in-out delay-100 hover:scale-110"
                onClick={() => setCart(!cart)}
              >
                <ShoppingCart
                  size={23}
                  fill={cart ? "#ffb83e" : "none"}
                  className={`${
                    cart ? "text-[#ffb83e]" : ""
                  } w-[22px] lg:w-[23px]`}
                />
              </button>

              <div className="flex items-center my-auto">
                <Menu as="div" className="relative inline-block text-left px-2">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-md font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:flex lg:justify-center pt-6">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>
                  {brandData.length !== 0 && categoriesData.length !== 0 ? (
                    <div className="w-full p-8 rounded-[10px] bg-white shadow-md">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 py-6"
                          defaultOpen
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <span className="text-[16px] font-medium text-gray-900 text-left">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <div className="text-[#ffc052]">
                                        <SquareMinus size={21} />
                                      </div>
                                    ) : (
                                      <div className="text-gray-900">
                                        <SquarePlus size={21} />
                                      </div>
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className={`space-y-1`}>
                                  {section.options.map((option, optionIdx) => (
                                    <a
                                      href={`${
                                        section.name === "ยี่ห้อ / Brand"
                                          ? "/brand/" + option.Name
                                          : section.name ===
                                            "ชนิดสินค้า / Product Type"
                                          ? "/category/" + option.Name
                                          : option.Name
                                      }`}
                                      key={option.Name}
                                      className={`${
                                        parts.includes(option.Name)
                                          ? "bg-[#fff4e2]"
                                          : "hover:bg-gray-200"
                                      } flex items-center rounded-[10px] py-[10px] cursor-pointer`}
                                    >
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className={`${
                                          parts.includes(option.Name)
                                            ? "text-[#ff9d00]"
                                            : "text-gray-600"
                                        } ml-3 text-sm`}
                                      >
                                        {option.Name}
                                      </label>
                                    </a>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full p-8 rounded-[10px] bg-white shadow-md">
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
                    </div>
                  )}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <Product clickCart={cart} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
