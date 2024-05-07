export default function AllHover() {
  return (
    <div className="relative group py-0 md:py-4">
      <div
        className={`px-2 py-1 rounded-md`}
      >
        <div className="text-gray-100 text-[15px] lg:text-[16px] font-medium transition-colors ease-linear duration-200 delay-100 group-hover:text-[#ffc052] inline-flex items-center gap-x-1 px-1 py-1 leading-6 outline-none relative">
          <span>All</span>
          <div className="absolute bottom-0 left-0 w-0 h-[1px] transition-w duration-300 ease-linear group-hover:bg-[#ffb83e] group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
}
