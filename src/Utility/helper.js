import React from 'react';
import { Redirect } from 'react-router-dom'
const LOGOUT = (props) => {
  localStorage.clear()
  console.log(props)
  props.history.push('/login')
}
export default LOGOUT
