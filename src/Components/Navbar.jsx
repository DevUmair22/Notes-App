import { ArchiveOutlined, DeleteOutlined,  LightbulbOutlined, ModeEditOutlined, NotificationsOutlined } from '@mui/icons-material'
import React from 'react'

import {Grid} from '@mui/material'

const Navbar = () => {
  return (
  <Grid
  container
  direction="column"
  justifyContent="space-between"
  alignItems="center"
  m="10px 10px 10px 0px"
  border="2px solid black"
>
<Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center" item md="2" >
<LightbulbOutlined fontSize='large'/><p>Notes</p></Grid>
<Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center" item md="2" >
    <NotificationsOutlined fontSize='large'/><p>Reminders</p></Grid>
<Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center" item md="2" ><ModeEditOutlined fontSize='large'/><p>Edit Labels</p></Grid>
<Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center" item md="2" ><ArchiveOutlined fontSize='large'/><p>Archive</p></Grid>
<Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center" item md="2" ><DeleteOutlined fontSize='large'/><p>Trash</p></Grid>

</Grid>

  )
}

export default Navbar