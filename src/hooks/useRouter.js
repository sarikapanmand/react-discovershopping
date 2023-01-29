import { useState } from 'react'
import Cart from '../Pages/Cart'
import Profile from '../Pages/Profile'

const useRouter = () => {
  const [routes, setroutes] = useState([
    {
      Path: '/profile',
      Element: Profile,
      props: {},
    },
    {
      Path: '/cart',
      Element: Cart,
      props: {},
    },
  ])

  return {
    routes,
  }
}

export default useRouter
