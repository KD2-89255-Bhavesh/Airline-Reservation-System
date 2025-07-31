import React from 'react'
import BaseLogin from '../../../components/auth/BaseLogin'
import { login } from '../../../services/auth/user'

function Login() {
  return (
    <BaseLogin
      loginType="user"
      authService={login}
      redirectPath="/"
    />
  )
}

export default Login
