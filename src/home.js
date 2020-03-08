import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
export default function home() {
  return (
    <div className="main">
      <h3>Welcome home</h3>
      <Link to="/users" className="Link"> All Users</Link>
    </div>
  );
}
