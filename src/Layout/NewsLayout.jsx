import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from '../SharedPages/LeftNav/LeftNav';
import RightNav from '../SharedPages/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default NewsLayout;