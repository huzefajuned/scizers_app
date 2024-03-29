// Importing logo image
import logoImg from "../assets/logo.png";

/**
 * Header Component
 * @param {Function} handleSearch - Function to handle search input changes
 */
const Header = ({ handleSearch }) => {
  return (
    <div className="bg-blue-600 py-4 px-8 flex flex-row gap-10 justify-between items-center sticky top-0">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logoImg} alt="Logo" className="h-10 mr-4" />
      </div>
      {/* Search Input */}
      <div className="relative w-4/12">
        <input
          type="text"
          placeholder="search people"
          className=" border-2 text-lg rounded-xl py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Header;
