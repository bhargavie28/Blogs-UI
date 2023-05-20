import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import api from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

export default function MultilineTextFields() {
  const { id } = useParams();
  const [severity, setSeverity] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [content, setContent] = useState();

  if (!!id) {
    useEffect(() => {
      const fetchData = async () => {
        const data = await api.get(`/${id}`);
        setTitle(data.data.title);
        setDescription(data.data.description);
        setContent(data.data.content);
      };

      fetchData();
    }, []);
  }


  const submitBlog = async() => {
    try {
      const payload = {
        title,
        description,
        content,
      };
      await api.post("/blog", payload);
      setSeverity("success");
      setMessage("Blog Created Successfully.");
      navigate("/");
    } catch (err) {
      setSeverity("error");
      setMessage("Something Went Wrong");
    }
  };
  const updateBlog = async () => {
    try {
      const payload = {
        title,
        description,
        content,
      };
      await api.put(`/blog/${id}`, payload);
      setSeverity("success");
      setMessage("Blog Updated Successfully.");
      navigate("/");
    } catch (err) {
      setSeverity("error");
      setMessage("Something Went Wrong");
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          display: "flex",
          flexDirection: "column",
          mt: '20px'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-multiline-flexible"
          label="Blog Title"
          multiline
          maxRows={4}
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          id="outlined-textarea"
          label="Description"
          placeholder="Placeholder"
          multiline
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          required
          id="outlined-multiline-static"
          label="Blog Content"
          multiline
          rows={4}
          value={content || ""}
          onChange={(e) => setContent(e.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button disabled={!title || !description || !content} variant="contained" onClick={!!id ? updateBlog : submitBlog}>
          {!!id ? 'Update' : 'Submit'}
        </Button>
      </Box>
      {!!severity && <Alert severity={severity} message={message} />}
    </>
  );
}
