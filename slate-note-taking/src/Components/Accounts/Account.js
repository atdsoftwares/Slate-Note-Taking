import "./Account.css";
import {
  useLoginSignupContext,
  useNoteTakingContext,
} from "../../Context/IndexAllContext";
function Account() {
  const { loginData } = useLoginSignupContext();
  const { getNotesData } = useNoteTakingContext();
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
          <th>Notes</th>
        </tr>
        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td> {email}</td>
          <td>{number}</td>
          <td>{getNotesData && getNotesData.length}</td>
        </tr>
      </table>
    </div>
  );
}

export default Account;
