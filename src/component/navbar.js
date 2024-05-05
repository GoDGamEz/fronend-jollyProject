import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Drum, ShoppingCart, EllipsisVertical } from "lucide-react";
import SearchBar from "./search";
import { Fragment} from "react";
import BrandsHover from "./navComponent/brandsHover";
import ShopHover from "./navComponent/shopHover";
import HomeHover from "./navComponent/homeHover";
import AllHover from "./navComponent/allHover";

const navigation = [
  { name: <HomeHover />, href: "/" },
  { name: <AllHover />, href: "/all" },
  { name: <BrandsHover />, href: "/brands" },
  { name: <ShopHover />, href: "/shop" },
];
const options = [{ name: "Add Data", href: "#", current: true }];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="bg-gradient-to-tr from-[#1e92d5] to-[#3d45cb] py-2 shadow-xl z-50 font-sans-thai">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex flex-shrink-0 items-center hidden md:block my-auto">
                    <Drum
                      size={30}
                      className="mx-0 lg:mx-2 w-[28px] lg:w-[30px]"
                    />
                  </div>
                  <div className="flex flex-shrink-0 -ml-20 sm:ml-16 items-center block md:hidden">
                    <SearchBar />
                  </div>
                  <div className="hidden md:ml-6 md:block">
                    <div className="flex space-x-2 lg:space-x-5">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex space-x-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden md:block">
                    <SearchBar />
                  </div>
                  <button
                    type="button"
                    className="relative shadow-md rounded-[10px] bg-gray-900 p-2 text-gray-300 hover:text-white focus:outline-none transition ease-in-out delay-100 hover:scale-110"
                  >
                    <ShoppingCart size={23} className="w-[22px] lg:w-[23px]" />
                  </button>
                  <Menu
                    as="div"
                    className="relative inline-block text-left px-2"
                  >
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-md font-medium text-gray-700 hover:text-gray-900">
                        <button
                          type="button"
                          className="relative shadow-md rounded-[10px] bg-gray-900 p-2 text-gray-300 hover:text-white focus:outline-none transition ease-in-out delay-100 hover:scale-110"
                        >
                          <EllipsisVertical
                            size={23}
                            className="w-[22px] lg:w-[23px]"
                          />
                        </button>
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
                      <Menu.Items className="absolute right-2 z-10 mt-3 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {options.map((option) => (
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
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
