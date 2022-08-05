import React from 'react'
import { useState } from 'react'

const Header = ({users,setUsers,searchFlag,setSearchFlag}) => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = users.filter((user) => user.name === name);

    setSearchFlag(true);
    setUsers(newUser);
    setName('');
  }
  
  const searchForm = () => {
    return (
      <form onSubmit={handleSubmit} className="d-flex">
        <div className="form-group ">
          <input
            type="text"
            className="form-control w-75 float-end"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search"
            aria-describedby='button-addon2'
          />
        </div>
        <button type="submit" className="btn btn-primary" id='button-addon2'>
          Search
        </button>
      </form>
    );
  
  }
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <h1>Dashboard</h1>
          </div>
        </a>
        {searchFlag ? "": searchForm()}
      </div>
    </nav>
  );
}

export default Header