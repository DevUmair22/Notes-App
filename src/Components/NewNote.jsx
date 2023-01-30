import React from 'react'
import { Grid } from '@mui/material'
import {TextField} from '@mui/material'
const NewNote = () => {
  return (

<Grid container
    direction="column"
    justifyContent="space-between"
    alignItems="center"
    border="1px solid black"
    p={3} borderRadius={2} 
    >
        <TextField placeholder='Enter Title Here..' fullWidth="true" minRows="1" multiline="false" type="string" size="medium " variant="standard" border="none" />
<TextField placeholder='Enter Description Here...' fullWidth="true" minRows="2" maxRows="5" multiline="true" type="string" size="small " variant="standard"  border="none" />

</Grid>

  )
}

export default NewNote