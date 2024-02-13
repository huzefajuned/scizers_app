// Logo image
import logoImg from "../assets/logo.png";

/**
 * Header Component
 */
const Header = ({ handleSearch }) => {
  return (
    <div className="bg-blue-500 py-4 px-8 flex justify-between items-center sticky  top-0">
      <div className="flex items-center">
        <img src={logoImg} alt="Logo" className="h-8 mr-4" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
          onChange={handleSearch}
        />
        <button className="absolute right-0 top-0 mt-2 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
