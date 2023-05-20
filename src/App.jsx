import { Fragment, useState } from 'react'
import './App.css';
import Header from './components/Header.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing  from './views/Landing';
import CreateBlog from './views/CreateBlog';


function App() {
  return(
<Router>
    <Header />
    <Routes>
    <Route exact path="/" Component={Landing} />
    <Route path="/createBlog" Component={CreateBlog} />
    <Route path="/createBlog/:id" Component={CreateBlog} />


    </Routes>
</Router>
  
)}

export default App
