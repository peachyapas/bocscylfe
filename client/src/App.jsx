import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar_Self from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

import Home from './pages/home.jsx';
import PageAuthors from './pages/authors.jsx';


function App() {
  return (
    <Container fluid>
      <Router>
          <Row>
              <Col lg={2} md={3} sm={4} xs={12} className="p-0">
                  <Sidebar />
              </Col>
              
              <Col lg={10} md={9} sm={8} xs={12} className="p-0">
                  <Row> 
                      <Navbar_Self /> 
                  </Row>
                  <Row>
                      <div className="content">
                          <Routes>
                              <Route path="/" element={<Home />} /> 
                              <Route path="/authors" element={<PageAuthors />} /> 
                          </Routes>
                      </div>
                  </Row>
              </Col>
          </Row>
      </Router>
    </Container>
  )
}

export default App
