import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/styles/App.css'; // style sheet

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageAuthors = () => {
  const [variable, setVariable] = useState(); // define your state

  useEffect(()=>{
    defineFunctions();
  },[]);

  const defineFunctions = () => {
    try {
      // call your apis here
    } catch(error) {
      console.error('Error fetching books:', error);
    }
  }

  return (
    <Container fluid>this is the authors page</Container>
    // you can call your setVariable here etc; or defineFunctions() here
  )
  };
  
  export default PageAuthors;
  