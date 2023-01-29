
import { useCallback, useEffect, useState } from 'react'


export let logoutUser = () => {}

export default function useToken() {

  const getToken = useCallback(() => {
    const tokenString = localStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken
  }, [])

  const [token, setToken] = useState(undefined)
  const saveToken = useCallback((userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setToken(null)
  }, [])

  useEffect(() => {
    logoutUser = logout
  }, [logout])

  useEffect(() => {
    setToken(getToken())
  }, [false])

  // useEffect(() => {
  //   if (token !== undefined) {
  //     if (token) {
  //       if (location.pathname.includes('login')) {
  //         navigate('/')
  //       }
  //     } else {
  //       if (
  //         location.pathname.includes('profile') ||
  //         location.pathname.includes('cart')
  //       ) {
  //         navigate('/login')
  //       }
  //     }
  //   }
  // }, [token, location.pathname])

  return {
    setToken: saveToken,
    token,
    logout,
    isLogin: token ? true : false,
    isINIT: token !== undefined,
  }
}
