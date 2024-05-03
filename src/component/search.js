import React, { useEffect, useState } from 'react';
import { X, Search } from 'lucide-react';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-ruby-eight.vercel.app',
});

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
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
        const response = await apiClient.get(`/filter/product?searchString=${searchTerm}&take=20&skip=&orderBy=asc`);
        setproductData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, searchFetch])*/


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
            <div><Search size={21} className="mr-2 w-4 h-4 lg:w-5 lg:h-5" /></div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="ml-3 w-[175px] sm:w-[250px] md:w-[150px] lg:w-[225px] 2xl:w-[275px] h-[28px] outline-none placeholder-gray-800 text-[15px] lg:text-[16px] bg-[#fcfcfc]"
              onClick={() => {
                setShowSearch(true);
              }}
            />
            {showSearch && (<X className="w-5 h-5 lg:w-6 lg:h-6 items-end absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowSearch(false)} />)}
          </div>
          <div className={`block absolute px-9 w-[238px] sm:w-[318px] md:w-[218px] lg:w-[298px] 2xl:w-[348px] ml-0.5 mt-2 z-10 bg-white rounded-[18px] shadow-md overflow-y-auto overflow-hidden transition-max-h duration-300 ease-in-out ${showSearch ? 'max-h-[26.5vh]' : 'max-h-0'
            }`}>
            <ul className="py-2">
              {data ? (
                data?.map((product) => (
                  <a key={product.id} href={"/detail/" + product.proj_abbr_name}>
                    <li className="cursor-pointer items-center w-full px-4 py-3 text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#072C29] hover:bg-gray-200 rounded-[10px]">
                      {product.proj_abbr_name}
                      <span className='text-gray-400 font-normal flex flex-wrap text-[10px] md:text-[12px] lg:text-[14px] whitespace-normal'>{product.proj_name_th}</span>
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
