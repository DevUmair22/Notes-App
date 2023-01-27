import React from 'react'
import { Grid } from '@mui/material'



const Note = (props) => {

  return (
    <Grid container
    direction="column"
    justifyContent="space-between"
    alignItems="center"
    border="1px solid black"
    p={3} borderRadius={2} 
    >
   
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
       
    
</Grid>
  )
}

export default Note