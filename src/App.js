import HomePage from './Pages/HomePage'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import Header from './components/Header/Header'
import useToken from './hooks/useToken'
// import Profile from './Pages/Profile'
// import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'
import useRouter from './hooks/useRouter'
import BecomeAseller from './Pages/Become-a-seller'
import Category from './Pages/Category'
import More from './Pages/More'
const App = () => {
  const {  setToken, isLogin, isINIT } = useToken()

  const { routes } = useRouter()
  return (
    <>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/become-a-seller' element={<BecomeAseller />} />
        <Route path='/more' element={<More />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:pCat' element={<Category />} />
        <Route path='/category/:pCat/:sCat' element={<Category />} />
        <Route path='/category/:pCat/:sCat/:iCat' element={<Category />} />
        {isINIT &&
          (isLogin ? (
            <>
              {routes.map((route, index) => (
                <Route
                  key={index.toString()}
                  path={route.Path}
                  element={<route.Element {...route.props} />}
                />
              ))}
              <Route path='/login' element={<Navigate to='/' replace />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/not-found' replace />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login setToken={setToken} />} />
              {routes.map((route, index) => (
                <Route
                  key={index.toString()}
                  path={route.Path}
                  element={<Navigate to='/login' replace />}
                />
              ))}
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/not-found' replace />} />
            </>
          ))}
        {/* {isINIT &&
          (isLogin ? (
            <>
              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Navigate to='/' replace />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/not-found' replace />} />
            </>
          ) : (
            <>
              <Route
                path='/login'
                element={<Login setToken={setToken}  />}
              />
              <Route
                path='/profile'
                element={<Navigate to='/login' replace />}
              />
              <Route path='/cart' element={<Navigate to='/login' replace />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/not-found' replace />} />
            </>
          ))} */}
      </Routes>
    </>
  )
}

export default App
