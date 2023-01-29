import React, { useEffect, useState } from 'react'
import { styled, Box, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const InputBox = styled(Box)`
  margin-bottom: 10px;
`

const Login = ({ setToken }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubimt = async (e) => {
    e.preventDefault()
    if (username && password) {
      if (username === 'user' && password === 'user') {
        await setToken('sxdcfgvhjszdxfcgvhb')
        navigate('/', { replace: true })
      } else {
        alert('Invalid password')
      }
    } else {
      alert('All feilds are required')
    }
  }

  return (
    <div
      style={{
        marginTop: 90,
      }}
    >
      <Box
        style={{
          margin: 'auto',
          width: '50%',
        }}
      >
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations (user:user) </p>

        <form onSubmit={handleSubimt}>
          <InputBox>
            <TextField
              fullWidth
              label='Username'
              variant='standard'
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <TextField
              fullWidth
              label='Password'
              type='password'
              variant='standard'
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          <Button
            variant='contained'
            fullWidth
            color='warning'
            style={{
              marginTop: 20,
            }}
            type='submit'
          >
            Login
          </Button>
        </form>
      </Box>
    </div>
  )
}

export default Login
