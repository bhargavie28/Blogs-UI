import * as React from 'react';
import "../App.css";
import Card from "../components/Card.jsx";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import api from "../api/api";
import  Alert  from '../components/Alert';


function Landing() {
  const [blogs, setBlogs] = useState([]);
  const [severity, setSeverity] = React.useState();
  const [message, setMessage] = React.useState();
  useEffect(() => {
    const fetchData = async () => {
        const data = await api.get();
        setBlogs(data.data);
     }
   
     fetchData();
  }, []);

  const deleteBlog = async(id)=> {
    try{
      const res = await api.delete(`/blog/${id}`);
      setSeverity('success');
      setMessage('Blog Deleted Successfully.')
      const blogsCopy = [...blogs]
      const blogIndex = blogsCopy.findIndex((item)=> item._id === id)
      blogsCopy.splice(blogIndex, 1);
      setBlogs(blogsCopy)
      
    }catch(err){
      setSeverity('error');
      setMessage('Something went wrong')
    }
  }

  return (
    <Box sx={{display: 'flex',  gap: "8px", flexWrap: "wrap", mt:'20px'}}>
      {blogs?.length  && blogs.map((blog) => {
        return(
        <Box>
          <Card sx={{ flex: "0 0 33.3333%"  }} blog={blog} blogs={blogs} onDeleteBlog={deleteBlog} />
        </Box>)
      })}
        {!!severity && <Alert severity={severity} message= {message} />}
    </Box>
  );
}

export default Landing;
