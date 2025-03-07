import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
const ProfilePage = () => {
    const { authUser } = useAuthStore(); //this is how ham use use karte hai..
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage