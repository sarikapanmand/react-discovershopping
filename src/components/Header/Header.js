import { AppBar, Toolbar,styled ,Box} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import NavItems from './NavItems';
import Search from './Search';

const StyleHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
box-shadow: none;
`;
const Logo = styled(Box)`
  margin-left: 12%;
`;
const Image = styled('img')({
  width: 75
})

const Header = ({ isLogin }) => {
  return (
    <StyleHeader>
      <Toolbar
        style={{
          minHeight: 55,
        }}
      >
        <Logo>
          <Link to='/'>
            <Image
              alt='logo'
              src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png'
            />
          </Link>
        </Logo>

        <Search />
        <NavItems isLogin={isLogin} />
      </Toolbar>
    </StyleHeader>
  )
}

export default Header
