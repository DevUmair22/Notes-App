import { Container } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import NoteBoard from '../Components/NoteBoard'

const Home = () => {
  return (
    <>
    <Container maxWidth="xs sm md lg" border="2px solid black">
    {/* <div className='main-container'> */}
      <Header />
      
{/* <Navbar/> */}
       <NoteBoard/>
      
       {/* </div> */}
       </Container>
    </>
  )
}

export default Home