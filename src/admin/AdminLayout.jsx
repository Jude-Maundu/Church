import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-wrap">
      <aside className="admin-sidebar">
        <div className="brand">Admin</div>
        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/home">Home Editor</Link>
          <Link to="/admin/contact">Contact Editor</Link>
          <Link to="/admin/assistant">Assistant</Link>
          <Link to="/admin/pages">Pages</Link>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;


