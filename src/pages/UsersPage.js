import { useEffect, useState } from "react";

const URL = "http://localhost:3030/users";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users Page</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody key={index}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
