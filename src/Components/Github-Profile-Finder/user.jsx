/* eslint-disable react/prop-types */

import "./style.css";
export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`http://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on
          {` ${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="repos">
        <div>
          <p>Public Repos :</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers :</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following :</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
