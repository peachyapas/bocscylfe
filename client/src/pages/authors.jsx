import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/styles/App.css'; // style sheet

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RenderCards from '../components/renderCards';

const PageAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(()=>{
    fetchAuthors();
  },[]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('/api/authors');
      setAuthors(response.data)
    } catch(error) {
      console.error('Error fetching authors:', error);
    }
  }

  return (
    <Container fluid>this is the authors page, test
    {RenderCards(authors, "Authors")}
    </Container>

    // you can call your setVariable here etc; or defineFunctions() here
  )
  };
  
  export default PageAuthors;
  