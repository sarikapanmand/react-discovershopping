import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../hooks/useToken'

const Container = styled(Box)`
  display: flex;
  align-items: center;
`

const CustomButton = styled(Button)`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  background: #fff;
  color: blue;
  font-size: 16;
  border-radius: 0;
  text-transform: 'capitalize';
  text-decoration: none;
  :hover {
    background: #fff;
    color: blue;
  }
`

const NavItems = ({ isLogin }) => {
  const handlelogout = async () => {
    logoutUser()
  }

  return (
    <Container>
      {!isLogin ? (
        <Link
          to='login'
          style={{
            textDecoration: 'none',
          }}
        >
          <CustomButton variant='contained'>Login</CustomButton>
        </Link>
      ) : (
        <Link
          to='/profile'
          style={{
            marginLeft: '8%',
            width: 100,
          }}
        >
          <Typography>Hi, user</Typography>
        </Link>
      )}
      <Link
        to='/become-a-seller'
        style={{
          marginLeft: '8%',
          width: 205,
          cursor: 'pointer',
        }}
      >
        <Typography>Become a Seller</Typography>
      </Link>

      {!isLogin ? (
        <Link
          to='/more'
          style={{
            marginLeft: '5%',
            cursor: 'pointer',
          }}
        >
          <Typography>More</Typography>
        </Link>
      ) : (
        <Typography
          style={{
            marginLeft: '5%',
            cursor: 'pointer',
          }}
          onClick={handlelogout}
        >
          Logout
        </Typography>
      )}
      <Link
        to='/cart'
        style={{
          marginLeft: '8%',
        }}
      >
        <Box
          style={{
            display: 'flex',
          }}
        >
          <ShoppingCartIcon />

          <Typography>Cart</Typography>
        </Box>
      </Link>
    </Container>
  )
}

export default NavItems
