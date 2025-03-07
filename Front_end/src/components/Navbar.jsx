import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
    const { logout,authUser } = useAuthStore();

  return (
    <header>
      {/* <Navbar></Navbar> */}
      <div>Navbbbar</div>
      </header>
  )
}

export default Navbar