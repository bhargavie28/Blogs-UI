import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function OutlinedCard({blog, onDeleteBlog}) {
  const navigate = useNavigate();
  const card = (

    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {blog?.description}
        </Typography>
        <Typography variant="h5" component="div">
          {blog?.title}
        </Typography>
        
        <Typography variant="body2">
          {blog?.content.substr(0, 50)}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
  
      <CardActions>
        <Button size="small" onClick={()=> navigate(`/createBlog/${blog._id}`, {state: {blog}})}>Read More</Button>
      </CardActions>
      <CardActions>
        <EditIcon size="small" onClick={()=> navigate(`/createBlog/${blog._id}`, {state: {blog}})}>Edit</EditIcon>
        <DeleteIcon size="small" onClick={()=> onDeleteBlog(blog._id)}>Delete</DeleteIcon>
  
      </CardActions>
      </Box>
    </React.Fragment>
  );
  return (
    <>
    <Box sx={{ minWidth: '275px',  maxWidth: '275px',}}>
      <Card variant="outlined" navigate={navigate}>{card}</Card>
    </Box>
    </>
  );
  
}