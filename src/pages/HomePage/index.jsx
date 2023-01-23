import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export default function HomePage() {
  const {authenticated, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }

  return (
    <div>
      <h1>HomePage</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
