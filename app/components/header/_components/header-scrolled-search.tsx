export const HeaderScrolledSearch: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-lg ml-[90px] bg-white shadow-md rounded-full px-4 py-2 mt-10 border border-gray-300">
      {/* Anywhere Button */}
      <button className="flex-1 text-left px-4 py-2 border-r border-gray-300 focus:outline-none rounded-l-full">
        <span className="block font-semibold text-sm">Anywhere</span>
      </button>

      {/* Any week Button */}
      <button className="flex-1 text-left px-4 py-2 border-r border-gray-300 focus:outline-none">
        <span className="block font-semibold text-sm">Any week</span>
      </button>

      {/* Add guests Button */}
      <button className="flex-1 text-left px-4 py-2 focus:outline-none rounded-r-full">
        <span className="block text-gray-500 text-sm">Add guests</span>
      </button>

      {/* Search Button */}
      <button className="bg-red-500 text-white rounded-full p-2 focus:outline-none hover:bg-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.9-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </button>
    </div>
  );
};
