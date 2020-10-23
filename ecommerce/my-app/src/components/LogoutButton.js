import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <i className="fas fa-user-check" onClick={() => logout()}>
        Log Out
      </i>
    )
  )
}

export default LogoutButton