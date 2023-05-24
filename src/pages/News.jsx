import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInside from "./Home/EditorsInside/EditorsInside";
import Header from "../Components/Header";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
        <Header></Header>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/catagory/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> All News in this Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>
    </div>
  );
};

export default News;
