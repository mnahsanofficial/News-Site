import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from "../QZOne/QZone";
import bg from '../../assets/bg.png'

const RightNav = () => {
  return (
    <div className="mt-4">
      <h4>Login With</h4>
      <Button variant="outline-primary" className="mb-2">
        <FaGoogle />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login With Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />

      </div>
    </div>
  );
};

export default RightNav;
