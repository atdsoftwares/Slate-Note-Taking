import React from "react";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import "./Account.css";
function Account() {
  const { state } = useLoginSignupContext();
  console.log(state);
  const { loginData } = state;
  const { _id, email, name, number } = loginData;
  return (
    <div>
      <h1>Account Details </h1>
      <table className="table">
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Watchlater</th>
          <th>Playlists</th>
        </tr>
        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td> {email}</td>
          <td>{number}</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  );
}

export default Account;
