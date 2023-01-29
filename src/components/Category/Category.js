import { Box, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Category.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Cdata from '../../data/Category.json'
import { Link } from 'react-router-dom'
const CatBody = styled(Box)`
  display: flex;
  margin: 55px 0 0 0;
  justify-content: space-between;
  background: #fff;
  @media only screen and (min-width: 720px) {
    margin: 55px 100px 0 100px;
  }
`

const Card = styled(Box)`
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
`
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
`
const SubText = styled(Typography)`
  font-size: 14px;
`

const Flex = styled(Box)`
  display: flex;
  justify-content: 'inherit';
`
const Category = () => {
  const [activesubList, setactivesubList] = useState(0)

  return (
    <CatBody
      onMouseLeave={() => {
        setactivesubList(0)
      }}
    >
      {Cdata.map((item, index) => (
        <Link to={'/category/' + item.title}>
          <Card key={index.toString()} className='tooltip cat'>
            <img src={item.icon} alt={item.title} style={{ width: 64 }} />
            <Flex>
              <Text>{item.title} </Text>
              {item.subCat && (
                <KeyboardArrowDownIcon
                  style={{
                    height: 14,
                    marginTop: 4,
                  }}
                  className='catIcon'
                />
              )}
            </Flex>

            {item.subCat && (
              <div
                className={
                  index === Cdata.length - 1
                    ? 'tooltipcontentLast'
                    : 'tooltipcontent'
                }
              >
                <Flex className='tooltipbody'>
                  <Box
                    style={{
                      width: '51%',
                      background: '#FFF',
                      boxShadow: '0 4px 16px 0 rgb(0 0 0 / 20%)',
                      zIndex: 100,
                    }}
                  >
                    <ul className='sublist'>
                      {item.subCat.map((sub, indexSub) => (
                        <Link to={'/category/' + item.title + '/' + sub.name}>
                          <li
                            key={indexSub.toString()}
                            onMouseOver={() => {
                              setactivesubList(indexSub)
                            }}
                          >
                            <Flex
                              className='leftList'
                              style={{
                                justifyContent: 'space-between',
                              }}
                            >
                              <SubText
                                style={
                                  activesubList === indexSub
                                    ? { color: 'blue' }
                                    : { color: '#000' }
                                }
                              >
                                {sub.name}
                              </SubText>
                              <Box className='sub-icons'>
                                <ArrowForwardIosIcon style={{ height: 14 }} />
                              </Box>
                            </Flex>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </Box>
                  {item.subCat[activesubList] && (
                    <Box
                      style={{
                        width: '49%',
                        background: '#fff',
                        zIndex: 90,
                      }}
                    >
                      <ul className='sublist'>
                        <Typography
                          style={{
                            color: 'gray',
                            textTransform: 'uppercase',
                            fontSize: 12,
                            marginTop: 10,
                            textAlign: 'left',
                            marginLeft: 10,
                          }}
                        >
                          More in {item.subCat[activesubList].name}
                        </Typography>
                        {activesubList !== null &&
                          item.subCat[activesubList].innercat.map(
                            (inner, indexInner) => (
                              <Link
                                to={
                                  '/category/' +
                                  item.title +
                                  '/' +
                                  item.subCat[activesubList].name +
                                  '/' +
                                  inner.name
                                }
                              >
                                <li key={indexInner.toString()}>
                                  <Box className='rightList'>
                                    <SubText>{inner.name}</SubText>
                                  </Box>
                                </li>
                              </Link>
                            )
                          )}
                      </ul>
                    </Box>
                  )}
                </Flex>
              </div>
            )}
          </Card>
        </Link>
      ))}
    </CatBody>
  )
}

export default Category
