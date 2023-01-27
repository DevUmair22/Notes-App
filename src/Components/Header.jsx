import { SearchOutlined } from '@mui/icons-material'
import React from 'react'
import { Grid, Typography } from '@mui/material'
import {Input,SearchContainer} from './Styled'



const Header = () => {
  return (
<Grid
  container
  spacing={2}
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  mt={1}
  border="2px solid black"
>
  <Grid item md="4" sm="6" xs="6" ><Typography variant='h1' fontSize="1rem">My Notes Keeper</Typography></Grid>
  <Grid item md="6" sm="4" xs="4"><SearchContainer>
  <Input placeholder='Search Notes'/>
  <SearchOutlined/>
</SearchContainer></Grid>
  <Grid item md="2" sm="2" xs="2"> <Typography variant='h1' fontSize="1rem">Right</Typography></Grid>
  </Grid>



  )
}

export default Header