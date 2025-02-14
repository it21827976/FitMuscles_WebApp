import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Card, CardBody, Input, Form, Label, Button,FormGroup } from 'reactstrap';
import { SaveVideoInfo, UplaodVideo } from '../urls/videoService';
import {ProgressBar} from 'react-bootstrap';
import Nav from '../pages/Nav';


import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';


const AddVideo = () => {
    const [video, setVideo] = useState({
        title: "",
        tags: "",
        description: "",
    });
    const [progress,setProgress] = useState(0)
    const [videos, setVideos] = useState(null);
    const [loading,setLoading] =useState(true);
    const [singleProgress, setSingleProgress] = useState(0);
    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }



    //fields change handle function .
    const fieldChangeHandle = (event) => {
        setVideo({ ...video, [event.target.name]: event.target.value });
    };
    //handling file change event  .
    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
        setVideos(event.target.files[0]);
    }

    //Upload videos function with title,description,tags .
    const createVideo = (event) => {
        event.preventDefault();
        console.log(video);
        if (video.title.trim() === "") {
            toast.error("please enter title"); return;
        }
        if (video.description.trim() === "") {
            toast.error("Enter some description below 500 character");
            return;
        }
        //submit call starts here .
        SaveVideoInfo(video).then((data) => {
            console.log(data);
            UplaodVideo(videos, data.id,singleFileOptions).then((data) => {
                setLoading(true)
                alert(" wait video is Uploading");
                console.log(data);
                setVideos(event.target.files[0])
            }).catch((error) => {
                console.log(error);
            });
            toast.success("Video Uploaded with Information!!")
            console.log(video);
            setVideo({
                title: "", description: "", tags: "",
            });
        }).catch((error) => {
            alert("upload failed")
        });
    }
    return (
        <>
        <Nav/>
        
        <div className='wrapper' style={{ padding: '80px', paddingTop: "10px" }}>
            <Container>
                <Container className="text-center my-4 p-4" style={{}}>
                    <Button color="primary" size="lg" href="/view">Click to View Posts</Button>
                </Container>
                <Card className="shadow border rounded-lg my-4" style={{ padding: '20px' }}>
                    <CardBody>
                        <h3 className="mb-4"><strong>Upload Your Post Here</strong></h3>
                        <Form onSubmit={createVideo}>
        <FormGroup>
            <Label for="title">Post Title</Label>
            <Input
                type="text"
                id="title"
                placeholder="Enter title here"
                className="rounded-lg"
                name="title"
                onChange={fieldChangeHandle}
                style={{ marginBottom: '10px', marginLeft: "10px", color: "red" }} // Add margin bottom for space
            />
        </FormGroup>
        <FormGroup>
            <Label for="tags">Post Tags</Label>
            <Input
                type="text"
                id="tags"
                placeholder="Enter tags"
                className="rounded-lg"
                name="tags"
                onChange={fieldChangeHandle}
                style={{ marginBottom: '10px', marginLeft: "10px", color: "red" }} // Add margin bottom for space
            />
        </FormGroup>
        <FormGroup>
            <Label for="description">Description</Label>
            <Input
                type="text"
                id="description"
                placeholder="Enter description"
                className="rounded-lg"
                name="description"
                onChange={fieldChangeHandle}
                style={{ marginBottom: '10px' , marginLeft: "10px" , color: "red"}} // Add margin bottom for space
            />
        </FormGroup>


                            <FormGroup>
                                <Label for="video">Select video to upload</Label>
                                <Input id="videoName" type="file"
                                    onChange={handleFileChange}
                                    style={{marginLeft: "10px"}} 
                                    />
                            </FormGroup>
                            <div className="text-center my-4" style={{ width: '200px', margin: '0 auto' }}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value={singleProgress}
                                    text={`${singleProgress}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '1rem',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                            </div>
                            <Container className='text-center' style={{ marginTop: '40px', marginBottom: "20px",color: "orange" }}>
                                <Button className="rounded-lg" color="primary">Upload Post</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
        </>
    );
    
    
}

export default AddVideo