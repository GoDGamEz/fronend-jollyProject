export default function AllHover() {
  return (
    <div className="relative group py-0 md:py-3">
      <div
        className={`text-gray-100 hover:bg-gray-900 hover:shadow-md hover:text-white px-3 py-2 rounded-md`}
      >
        <div className="inline-flex items-center text-[15px] lg:text-[16px] font-medium text-sm outline-none">
          <span>All</span>
        </div>
      </div>
    </div>
  );
}
