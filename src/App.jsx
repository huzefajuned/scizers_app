import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";
import Header from "./components/Header";

const API_URL = "https://swapi.dev/api/people";

const fetchUsers = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(API_URL);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchUsers(currentPage)
      .then((data) => {
        setUsers(data.results);
        setNextUrl(data.next || "");
        setPrevUrl(data.previous || "");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [currentPage]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNextPage = () => {
    if (nextUrl) setCurrentPage(nextUrl);
  };

  const handlePrevPage = () => {
    if (prevUrl) setCurrentPage(prevUrl);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />

      <div className="flex flex-col items-center my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>

        <div className="flex mt-8 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={!prevUrl}
            className={`px-4 py-2 rounded-md ${
              prevUrl
                ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={!nextUrl}
            className={`px-4 py-2 rounded-md ${
              nextUrl
                ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {loading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default App;
