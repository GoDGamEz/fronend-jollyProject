import React, { useEffect, useState } from 'react';
import { X, Search } from 'lucide-react';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jolly-online-store-3faac26a998e.herokuapp.com',
});

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchList, setShowSearchList] = useState(false);
  const [data, setData] = useState(null);

  const [searchFetch, setSearchFetch] = useState(false);

  const handleSearch = async (value) => {
    setSearchTerm(value);
    setSearchFetch(true);
    setTimeout(() => {
      setSearchFetch(false);
    }, 5000);
  };

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(`/products`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, searchFetch]);*/


  return (
    <div
      style={{
        fontFamily: "'Noto Sans Thai', sans-serif",
        whiteSpace: 'nowrap'
      }}
    >
      <div className="flex px-3">
        <div className='relative'>
          <div
            className="flex items-center outline-none rounded-[18px] px-4 py-1 border border-gray-800 shadow-md bg-[#fcfcfc]"
          >
            <div><Search size={21} className="mr-1 sm:mr-2 w-4 h-4 lg:w-5 lg:h-5" /></div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="ml-1 mr-2 w-[130px] sm:w-[225px] md:w-[145px] lg:w-[200px] 2xl:w-[250px] h-[28px] outline-none placeholder-gray-800 text-[15px] lg:text-[16px] bg-[#fcfcfc]"
              onClick={() => {
                setShowSearch(true);
                setShowSearchList(true);
              }}
            />
            {showSearch && (<div><X className="w-5 h-5 lg:w-6 lg:h-6 items-end cursor-pointer" onClick={() => {setShowSearchList(false); setTimeout(() => {setShowSearch(false);}, 400)}} /></div>)}
          </div>
          <div className={`block absolute px-7 w-[213px] sm:w-[318px] md:w-[233px] lg:w-[298px] 2xl:w-[348px] ml-0.5 mt-2 z-10 bg-white rounded-[18px] shadow-md overflow-y-auto overflow-hidden transition-max-h duration-300 ease-in-out ${showSearchList ? 'max-h-[26.5vh]' : 'max-h-0'
            }`}>
            <ul className="py-2">
              {data ? (
                data?.map((product) => (
                  <a key={product.id} href={"/detail/" + product.ProductName}>
                    <li className="cursor-pointer items-center w-full px-4 py-3 text-[11px] md:text-[13px] lg:text-[15px] font-semibold text-[#072C29] hover:bg-gray-200 rounded-[10px] whitespace-normal">
                      {product.ProductName}
                      <span className='text-gray-400 font-normal flex flex-wrap text-[10px] md:text-[12px] lg:text-[14px] whitespace-normal'>{product.Categories}</span>
                    </li>
                  </a>
                ))
              ) : (
                <div className="animate-pulse">
                  <li className="cursor-pointer items-center w-full space-y-4 px-4 py-3 text-[14px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#072C29] hover:bg-gray-200 rounded-[10px]">
                    <div className="h-2 w-1/3 bg-[#d1d6df] rounded"></div>
                    <div className="h-2 w-full bg-[#d1d6df] rounded"></div>
                  </li>
                  <li className="cursor-pointer items-center w-full space-y-4 px-4 py-3 text-[14px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#072C29] hover:bg-gray-200 rounded-[10px]">
                    <div className="h-2 w-1/3 bg-[#d1d6df] rounded"></div>
                    <div className="h-2 w-full bg-[#d1d6df] rounded"></div>
                  </li>
                  <li className="cursor-pointer items-center w-full space-y-4 px-4 py-3 text-[14px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#072C29] hover:bg-gray-200 rounded-[10px]">
                    <div className="h-2 w-1/3 bg-[#d1d6df] rounded"></div>
                    <div className="h-2 w-full bg-[#d1d6df] rounded"></div>
                  </li>
                  <li className="cursor-pointer items-center w-full space-y-4 px-4 py-3 text-[14px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#072C29] hover:bg-gray-200 rounded-[10px]">
                    <div className="h-2 w-1/3 bg-[#d1d6df] rounded"></div>
                    <div className="h-2 w-full bg-[#d1d6df] rounded"></div>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
