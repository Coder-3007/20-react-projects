import { useEffect, useState } from "react";
import "./style.css";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      //   calling the api
      const response = await fetch("http://dummyjson.com/users");
      //   getting data
      const data = await response.json();

      if (data && data.users && data.users.length) {
        // fetching the data
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  //   console.log(users, filteredUsers);
  return (
    <div className="main">
      <h1 className="heading">Scroll Indicator App</h1>
      <div className="search-autocomplete-container">
        {loading ? (
          <h1>Loading Data ! Please Wait</h1>
        ) : (
          <input
            value={searchParam}
            name="search-users"
            placeholder="Search Users here...."
            onChange={handleChange}
          />
        )}

        {error && <p className="error">{error}</p>}

        {showDropDown && (
          <Suggestions handleClick={handleClick} data={filteredUsers} />
        )}
      </div>
      <hr className="line-below" />
    </div>
  );
}
