import { Container } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import Header from '../Components/Header'

import NoteBoard from '../Components/NoteBoard'
import { noteArray } from '../Components/Styled'

const Home = () => {
const [notes,setNote]=useState(
  noteArray
)

  return (
    <>
    <Container maxWidth="xs sm md lg" border="2px solid black">
    {/* <div className='main-container'> */}
      <Header />
      
{/* <Navbar/> */}
       <NoteBoard notes={notes}/>
      
       {/* </div> */}
       </Container>
    </>
  )
}

export default Home