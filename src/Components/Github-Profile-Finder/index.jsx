import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Coder-3007");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`http://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }

    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <h1>Loading Data ! Please Wait</h1>;
  }

  return (
    <div className="main">
      <h1 className="heading">GitHub Profile Finder App</h1>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            name="search-by-username "
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
      </div>
      <hr className="line-below" />
    </div>
  );
}
