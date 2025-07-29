import React from 'react'
import AdminNavbar from './../../components/AdminNavbar';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
    <AdminNavbar/>
      <main className='admin-main-content'>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout
