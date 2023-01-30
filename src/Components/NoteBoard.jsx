import React from 'react'
import Note from './Note'
import { Grid } from '@mui/material'
import NewNote from './NewNote'
import Navbar from './Navbar'

const NoteBoard = ({notes}) => {
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


<Grid 
container
direction="row"
md="10" 
spacing={2} 
padding="10px"
>

 
  
  
  {notes.map((note)=>(
    <Grid item md="3" >
    <Note id={note.id}
    title={note.title}
    desc={note.desc}/>
     </Grid>
))}
 
<Grid item md="3"><NewNote/></Grid>

</Grid>

      </Grid>
    </>
  )
}

export default NoteBoard