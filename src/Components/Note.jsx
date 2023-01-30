import React from 'react'
import { Grid } from '@mui/material'



const Note = ({id,desc,title}) => {
console.log("item",title)
  return (
    <Grid container
    direction="column"
    justifyContent="space-between"
    alignItems="center"
    border="1px solid black"
    p={3} borderRadius={2} 
    >
   
        <h3>{title}</h3>
        <p>{desc}</p>
       
    
</Grid>
  )
}

export default Note