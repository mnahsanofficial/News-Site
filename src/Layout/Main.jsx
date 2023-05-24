import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../SharedPages/LeftNav/LeftNav";
import RightNav from "../SharedPages/RightNav/RightNav";
import NavigationBar from "../SharedPages/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default Main;
