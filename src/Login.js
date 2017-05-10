import React, { Component } from 'react'
import base from './base'

const Login = ({ authHandler }) => {
  const authenticate = (provider) => {
    base.authWithOAuthPopup(provider, authHandler)
  }

  return (
    <button className="github" onClick={() => authenticate('github')}>
      Sign In With GitHub
    </button>
  )
}

export default Login