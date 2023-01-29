import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import Category from '../components/Category/Category'
import Header from '../components/Header/Header'


const BannerContainer = styled(Box)`
  padding: 10px;
`
const CategoryContainer = styled(Box)`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
`
const Container = styled(Box)`
  margin-top: 55;
`
const  HomePage = ()=> {
  const [isMobile, setIsMobile] = useState(false)
  const handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      {isMobile ? (
        <h1 style={{ textAlign: 'center', marginTop: 50 }}>
          Mobile version is under development ✌️{' '}
        </h1>
      ) : (
        <>
          <Container>
            <CategoryContainer>
              <Category />
            </CategoryContainer>
            <BannerContainer>
              <Banner />
            </BannerContainer>
          </Container>
        </>
      )}
    </>
  )
}

export default HomePage
