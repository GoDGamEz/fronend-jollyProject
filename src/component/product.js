import fender from "./fender.png";
import tele from "./tele.png";
import bass from "./bass.png";
import keyboard from "./keyboard.png";
import { Heart } from "lucide-react";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Fender Custom Shop Limited Edition 70th Anniversary 1954 Stratocaster, Time Capsule Package",
    href: "#",
    imageSrc: fender,
    price: "157,500฿",
    color: "Wide-Fade 2-Color Sunburst",
  },
  {
    id: 1,
    name: "Squier 40th ANNIVERSARY TELECASTER, GOLD EDITION",
    href: "#",
    imageSrc: tele,
    price: "20,700฿",
    color: "Sherwood Green",
  },
  {
    id: 1,
    name: "FENDER AMERICAN PROFESSIONAL II JAZZ BASS",
    href: "#",
    imageSrc: bass,
    price: "68,400฿",
    color: "Dark Night",
  },
  {
    id: 1,
    name: "KORG KROSS2 88 KEYS MATTE BLACK",
    href: "#",
    imageSrc: keyboard,
    price: "33,300฿",
    color: "Black",
  },
  {
    id: 1,
    name: "Fender Custom Shop Limited Edition 70th Anniversary 1954 Stratocaster, Time Capsule Package",
    href: "#",
    imageSrc: fender,
    price: "157,500฿",
    color: "Wide-Fade 2-Color Sunburst",
  },
  {
    id: 1,
    name: "Squier 40th ANNIVERSARY TELECASTER, GOLD EDITION",
    href: "#",
    imageSrc: tele,
    price: "20,700฿",
    color: "Sherwood Green",
  },
  {
    id: 1,
    name: "FENDER AMERICAN PROFESSIONAL II JAZZ BASS",
    href: "#",
    imageSrc: bass,
    price: "68,400฿",
    color: "Dark Night",
  },
  {
    id: 1,
    name: "KORG KROSS2 88 KEYS MATTE BLACK",
    href: "#",
    imageSrc: keyboard,
    price: "33,300฿",
    color: "Black",
  },
  {
    id: 1,
    name: "Fender Custom Shop Limited Edition 70th Anniversary 1954 Stratocaster, Time Capsule Package",
    href: "#",
    imageSrc: fender,
    price: "157,500฿",
    color: "Wide-Fade 2-Color Sunburst",
  },
  {
    id: 1,
    name: "Squier 40th ANNIVERSARY TELECASTER, GOLD EDITION",
    href: "#",
    imageSrc: tele,
    price: "20,700฿",
    color: "Sherwood Green",
  },
  {
    id: 1,
    name: "FENDER AMERICAN PROFESSIONAL II JAZZ BASS",
    href: "#",
    imageSrc: bass,
    price: "68,400฿",
    color: "Dark Night",
  },
  {
    id: 1,
    name: "KORG KROSS2 88 KEYS MATTE BLACK",
    href: "#",
    imageSrc: keyboard,
    price: "33,300฿",
    color: "Black",
  },
  // More products...
];

export default function Products() {
  const [selectLike, setSelectLike] = useState([]);

  const handleLike = (like) => {
    setSelectLike(prevLikes => {
      if (prevLikes.includes(like)) {
        return prevLikes.filter((l) => l !== like);
      } else {
        return [...prevLikes, like];
      }
    });
  }
  return (
    <div className="bg-[#f9f9f9] font-sans-thai">
      <div className="mx-auto">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group transition ease-in-out delay-75 hover:scale-105 rounded-[10px] bg-white shadow-md"
            >
              <div className="aspect-h-1 shadow-sm aspect-w-1 w-full overflow-hidden border-b rounded-t-[10px] bg-gray-200 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="m-4 flex justify-between">
                <div className="mr-4">
                  <h3 className="text-[13px] xl:text-[14px] text-gray-800">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-[12px] xl:text-[13px] text-gray-500">
                    Color: {product.color}
                  </p>
                </div>
                <p className="text-[13px] xl:text-[14px] font-semibold text-gray-800">
                  {product.price}
                </p>
              </div>
              <div className="absolute top-0 right-0 m-4">
                <button
                  type="button"
                  className=" relative shadow-md rounded-[10px] opacity-80 bg-gradient-to-tr from-[#1e92d5] to-[#3d45cb] p-2 text-white scale-0 focus:outline-none transition ease-linear delay-100 group-hover:scale-100"
                  onClick={() => handleLike(product.name)}
                >
                  <Heart size={21} fill={selectLike.includes(product.name) ? '#ff0400' : 'none'} className={`${selectLike.includes(product.name) ? 'text-[#ff0400]' : ''} w-[20px] lg:w-[21px] transition-colors duration-200 ease-in-out`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
