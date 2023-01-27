import React from 'react'
import Note from './Note'
import { Grid } from '@mui/material'
import { array } from './Styled'
import Navbar from './Navbar'

const NoteBoard = () => {

  return (
    <>
   
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        mt={2}  
         marginLeft="-24px"
        border="2px solid black">
 <Grid item md="2" ><Navbar /></Grid>
<Grid container md="10" spacing={2} padding="10px">
        <Grid item md="3"><Note  title={array[0].title} desc={array[0].desc} /></Grid>
        <Grid item md="3"><Note  title={array[1].title} desc={array[1].desc} /></Grid>
        <Grid item md="3"><Note  title={array[2].title} desc={array[2].desc} /></Grid>
        <Grid item md="3"><Note  title={array[3].title} desc={array[3].desc} /></Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default NoteBoard