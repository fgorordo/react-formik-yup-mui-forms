import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const headerStyles = {
  container: {
    backgroundColor: 'lightblue',
    height:'90px',
    boxShadow: '0 0 10px #000',
    display: 'flex',
    alignItems: 'center',
    padding:'0 2rem'
  },
  text:{
    color: '#000',
  }
}
const Header = () => {
  return (
    <Box sx={headerStyles.container}>
      <Typography variant='h4' sx={headerStyles.text}>
        Formulario en React con MUI & Formik & Yup
      </Typography>
    </Box>
  )
}

export default Header