import React from 'react'
import { useState,useEffect } from 'react';

import Adduser from './User/Adduser';
import { getAllUsers } from './User/helper';

const Home = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllUsers().then(data => {
      if (data.error) {
        setError(true);
        console.log(data.error);
      } else {
        setUsers(data);
        setError(false);
      }
    }
    );
  }
    , []);
  

  return (
    <React.Fragment>
      <div className="d-flex gap-3 mb-4 ">
        <Adduser />
      </div>

      {error ? (
        <div className="alert alert-danger">Something went wrong!</div>
      ) : (
        <div className="container">
          <h3 className="text-center mt-3">User List</h3>
          <table className="table table-hover mt-4">
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index} className="mt-2">
                    <td className='ms-2'>{user.name}</td>
                    <td>
                      <button className="btn btn-sm  bg-success btn-success float-end">
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </React.Fragment>
  );
}

export default Home