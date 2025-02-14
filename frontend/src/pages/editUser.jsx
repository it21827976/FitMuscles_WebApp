import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../urls/baseUrl";
import { toast } from "react-toastify";
import { loadUser } from "../urls/videoService";

const Edit = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [user, setUser] = useState({
        id: "",
        title: "",
        tags: "",
        description: ""
    });

    const { title, tags, description } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(BASE_URL + `/update/${id}`, user);
            toast.success("User updated successfully!");
            navigate("/view");
        } catch (error) {
            toast.error("Error occurred while updating user");
        }
    };

    useEffect(() => {
        loadUser(id)
            .then((resp) => {
                setUser(resp.data); // Update the state with the fetched user data
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [id]); // Add id as a dependency so that useEffect runs whenever id changes

    return (
        <div className="container" style={{ padding: "10%" }}>
            <Button className="p-4" variant="primary" size="lg" href="/view">
                Back to view
            </Button>
            <div className="row">
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}>
                    <h2 className={"text-center m-4"}>Update Post</h2>
                    <form onSubmit={onSubmit}>
                        <div className={"mb-3"}>
                            <label htmlFor={"title"} className={"form-label"}>
                                Title
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Enter your title"}
                                name={"title"}
                                value={title}
                                onChange={(e) => onInputChange(e)}
                                style={{ marginBottom: "10px", marginLeft: "10px",color: "orange", fontWeight: "bold" }}
                            />
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"tags"} className={"form-label"}>
                                Tags
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Enter Tags"}
                                name={"tags"}
                                value={tags}
                                style={{ marginBottom: "10px", marginLeft: "10px",color: "orange", fontWeight: "bold" }}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"description"} className={"form-label"}>
                                Description
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Enter post Description"}
                                name={"description"}
                                value={description}
                                style={{ marginBottom: "10px", marginLeft: "10px",color: "orange", fontWeight: "bold" }}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type={"submit"} className={"btn btn-primary"} style={{color: "orange"}}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
