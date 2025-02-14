import React, { useState, useEffect } from "react";
import { BASE_URL } from "../urls/baseUrl";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import { GetAllVideos, DeletePostService } from "../urls/videoService";
import { useCollapse } from 'react-collapsed';
import { Link } from "react-router-dom";

const ViewPost = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Getting All videos
  const getAllVideos = async () => {
    try {
      const response = await GetAllVideos();
      setPosts(response.data);
      setLoading(true);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    if(window.confirm("Are you sure you want to delete?")){
      DeletePostService(id);
    }
  }

  return (
    <div style={{ padding: '80px', textAlign: 'center' }}>
      <Container className="mb-2 p-3">
        <Button className="p-4" variant="primary" size="lg" href="/">
          Back to Add Post
        </Button>
      </Container>
      <Container>
        <Card>
          <Row>
            {loading &&
              posts.map((post) => (
                <Col sm={12} md={6} lg={3} key={post.id}>
                  <Card className="my-3 p-3 rounded h-90">
                    <Card.Header></Card.Header>

                    <Card.Title style={{ fontSize: "28px", paddingBottom: "2%", textAlign: "left", paddingLeft: "20%" }}>{post.title}</Card.Title>
                      <Card.Subtitle>
                        <Card.Text style={{color:"orange", fontSize: "20px", paddingBottom: "2%", textAlign: "left", paddingLeft: "20%"}}>
                          <strong >{post.tags}</strong>
                        </Card.Text>
                      </Card.Subtitle>

                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ maxWidth: "70%" }}>
                        <video controls width="800" height="400">
                          <source
                            src={BASE_URL + "/play/" + post.id}
                            type="video/mp4"
                            alt=""
                          />
                        </video>
                      </div>
                      {/* <Card.Title>{post.title}</Card.Title>
                      <Card.Subtitle>
                        <Card.Text>
                          <strong style={{ color: "blue" }}>{post.tags}</strong>
                        </Card.Text>
                      </Card.Subtitle> */}

                      <div style={{ padding: "12px", textAlign: 'center' }}>
                        <p {...getCollapseProps()}>{post.description}</p>
                        <Link
                          size="xs"
                          variant="white"
                          {...getToggleProps({
                            onClick: () =>
                              setExpanded((prevExpanded) => !prevExpanded),
                          })}
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </Link>
                      </div>
                      <div style={{ marginTop: 'auto', color: "red",marginLeft: "55%"}}>
                        <Button
                          color="danger"
                          style={{ marginRight: "5px" }}
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </Button>
                        <Link
                          style={{ marginLeft: "5px" , color: "blue"}}
                          to={`/edit/${post.id}`}
                        >
                          Edit
                        </Link>
                      </div>
                      <Container style={{ marginTop: 'auto',marginLeft: "55%" }}>
                        <Link
                          style={{ marginLeft: "5px", color: "orange" }}
                          to={`/viewone/${post.id}`}
                        >
                          View
                        </Link>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default ViewPost;
