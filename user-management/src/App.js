import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/users">User List</Link>
          <Link className="nav-link" to="/add-user">Add User</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
