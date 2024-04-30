import { SquarePlus } from 'lucide-react';


export default function Sidebar() {
    return (
      <div className='flex justify-center pt-6 pb-2'>
        <div className="flex flex-col bg-white p-6 shadow-md rounded-[10px]">
          <button className="py-1 border-b border-gray-300">
              <div className='flex items-center py-5 px-2 hover:bg-gray-200 rounded-[5px]'>
                <span className='mr-8'>หมวดสินค้า / Department</span>
                <div className="ml-auto text-gray-700"><SquarePlus size={22} /></div>
              </div>
          </button>
          <button className="py-1 border-b border-gray-300">
              <div className='flex items-center py-5 px-2 hover:bg-gray-200 rounded-[5px]'>
                <span className='mr-8'>ยี่ห้อ / Brand</span>
                <div className="ml-auto text-gray-700"><SquarePlus size={22} /></div>
              </div>
          </button>
          <button className="py-1 border-b border-gray-300">
              <div className='flex items-center py-5 px-2 hover:bg-gray-200 rounded-[5px]'>
                <span className='mr-8'>ชนิดสินค้า / Product Type</span>
                <div className="ml-auto text-gray-700"><SquarePlus size={22} /></div>
              </div>
          </button>
        </div>
      </div>
    )
  }