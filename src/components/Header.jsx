import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  '../index.css';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='header'>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
            Blogs
          </Typography>
          <Button  color="inherit" onClick={() => navigate('/createBlog') }>Create Blog</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}