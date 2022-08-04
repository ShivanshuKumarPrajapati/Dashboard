import React from "react";
import { useState, useEffect } from "react";
import { FaList } from "react-icons/fa";

import { getAllUsers } from "../User/helper";
import { addUserData } from "./helper";

const AdduserData = ({reload,setReload}) => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    creative_thinking: "",
    communication_skills: "",
    problem_solving: "",
    year: "",
    user: "",
  });


useEffect(() => {
  getAllUsers().then((data) => {
    if (data.error) {
      setError(true);
      console.log(data.error);
    } else {
      setUsers(data);
      setError(false);
    }
  });
}, [reload]);
  
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }
      , 3000);
  }, [error]);


  const onSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    addUserData(data).then((data) => {
      if (data.error) {
        setError(true);
        console.log(data.error);
      } else {
        setData({
          creative_thinking: "",
          communication_skills: "",
          problem_solving: "",
          year: "",
          user: "",
        });
        setError(false);
      }
    }
    );
  }

  if (error) {
    return (
      <div className="text-danger">Something went wrong!!</div>
    )
  }

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div className="ms-2">New userData</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addProjectModal"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProjectModalLabel">
                Add userData
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Creative Thinking</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    id="name"
                    value={data.creative_thinking}
                    onChange={(e) =>
                      setData({ ...data, creative_thinking: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Communication Skills</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    id="name"
                    value={data.communication_skills}
                    onChange={(e) =>
                      setData({ ...data, communication_skills: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Problem solving</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    id="name"
                    value={data.problem_solving}
                    onChange={(e) =>
                      setData({ ...data, problem_solving: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Current year</label>
                  <input
                    type="year"
                    className="form-control"
                    id="name"
                    value={data.year}
                    onChange={(e) => setData({ ...data, year: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">User</label>
                  <select
                    id="clientId"
                    className="form-select"
                    value={data.user}
                    onChange={(e) => {
                      setData({ ...data, user: e.target.value });
                    }}
                  >
                    <option value="">Select User</option>
                    {users.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdduserData;
