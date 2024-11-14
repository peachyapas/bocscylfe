import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect, Component } from 'react';
import '/src/styles/App.css'; // style sheet
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    return (
        <Container fluid>
                <h1>welcome to my bookshelf?</h1>
                <ListGroup>
                    <ListGroupItem>hi</ListGroupItem>
                    <ListGroupItem>h2</ListGroupItem>
                </ListGroup>
                <p>just testing i guess</p>
        </Container>
    );

};

export default Home;
