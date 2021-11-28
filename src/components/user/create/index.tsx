import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const CreateUser: React.FC = () => {
  const { fetchUsers } = useActions();
  const { users, error, loading } = useTypedSelector((state) => state.user);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>List users</h1>
      <table className="table">
        <thead>
          <th>Image</th>
          <th>Full name</th>
          <th>Email</th>
          <th></th>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td><img src={"http://localhost:15247"+user.image} width="100" alt="User Image"/></td>
              <td>{user.fio}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/edit/${user.id}`} className="btn btn-success">Edit</Link>
                &nbsp;&nbsp;
                <Link to={`/users/delete/${user.id}`} className="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CreateUser;
