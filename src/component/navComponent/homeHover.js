export default function HomeHover() {
  return (
    <div className="relative group py-0 md:py-3">
      <div
        className={`text-gray-100 hover:bg-gray-900 hover:shadow-md hover:text-white px-3 py-2 rounded-md text-[15px] lg:text-[16px] font-medium`}
      >
        <div className="inline-flex items-center text-[15px] lg:text-[16px] font-medium gap-x-1 text-sm leading-6 outline-none">
          <span>Home</span>
        </div>
      </div>
    </div>
  );
}
