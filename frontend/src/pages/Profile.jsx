import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Img1 from '../images/home.png'
import Img2 from '../images/not.png'
import Img3 from '../images/add.png'
import Img4 from '../images/prof.png'
import Img5 from '../images/post.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Img6 from '../images/pl2.png'
import Like from '../images/heart.png'
import Login from '../images/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {



    const { id } = useParams('');
    const [data, setData] = useState([]);

    const [like, setLike] = useState([ ]);
    const [coment, setCommnt] = useState([])
    const [cdata, setcData] = useState([]);




    const [likeset, setLikeSet] = useState(false);



    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/like/getOnelike/' + id).then((res) => {
            setLike(res.data);
            console.log(res.data);
        }).catch((err) => { })


    }, [])



    const [loginUser, setLoginUser] = useState([]);

    useEffect(() => {
        const getLoginData = () => {

            axios.get('http://localhost:8080/api/v1/user/getOne/' + id).then((res) => {
                setLoginUser(res.data);
                console.log(res.data);
            }).catch((err) => { })
        }
        getLoginData();


       
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/workop/getonewop/' + id).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => { })


    }, [])

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/comment/getcommentone/' + id).then((res) => {
            setcData(res.data);
            console.log(res.data);
        }).catch((err) => { })

    }, [])

    const hadleComment = (e) => {

        e.preventDefault();

        const pdata = {
            pid: id,
            usName: "user1",
            comment: coment
        }
        axios.post('http://localhost:8080/api/v1/comment/savecomment', pdata).then((res) => {
            Notify('Comment add')
            // Reload the page after 2000 milliseconds (2 seconds)
            setTimeout(function () {
                window.location.reload();
            }, 2000);

        }).catch((err) => {
            alert('Failed to add Comment')
        })

        setgo(coment)
    }
    const [go, setgo] = useState('')





    function Notify(mess) {
        toast.success(mess, {
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            position: "top-right",
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                width: '300px',         // Set the width
                height: '100px',        // Set the height
                fontSize: '22px',       // Set the font size
                alignItems: 'center',   // Center align items vertically
                fontFamily: '"PT Sans", sans-serif',
                display: 'flex',        // Use flexbox to align items
                justifyContent: 'center', // Center align items horizontally
                color: 'white',          // White text color
            },
            bodyClassName: 'custom-toast-body'

        });
    }

    function Notify2(mess) {
        toast.error(mess, {
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            position: "top-right",
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                width: '300px',         // Set the width
                height: '100px',        // Set the height
                fontSize: '22px',       // Set the font size
                alignItems: 'center',   // Center align items vertically
                fontFamily: '"PT Sans", sans-serif',
                display: 'flex',        // Use flexbox to align items
                justifyContent: 'center', // Center align items horizontally
                color: 'white',          // White text color
                borderRadius: '8px'
            },
            bodyClassName: 'custom-toast-body'

        });
    }


    return (
        <div className='home w-[100%] h-[auto]'>

            <Nav />

            <div className="side-box w-[30%] h-[90vh] fixed top-20 z-30 bg-zinc-900 rounded flex items-center justify-center">

                <div className="box-cont w-[90%] h-[90%] flex items-center justify-center">

                    <ul className='w-[90%] grid items-center justify-center '>

                        <li className='my-2 bg-zinc-800 w-[200px] p-2 rounded'><a href={`/${id}`} className=' flex items-center justify-between px-4 '><img src={Img1} alt="" width={25} className='' /><span className=''>Home</span></a></li>
                        <li className='my-2 bg-zinc-800 w-[200px] p-2 rounded'><a href='!' className=' flex items-center justify-between px-4 '><img src={Img2} alt="" width={25} className='' /><span className=''>Notification</span></a></li>

                        <li className='my-2 bg-zinc-800 w-[200px] p-2 rounded'><a href={`/workplan/${id}`} className=' flex items-center justify-between px-4 '><img src={Img3} alt="" width={25} className='' /><span className=''>Workout </span></a></li>
                        <li className='my-2 bg-zinc-800 w-[200px] p-2 rounded'><a href={`/mealplan/${id}`} className=' flex items-center justify-between px-4 '><img src={Img3} alt="" width={25} className='' /><span className=''>Meal Plan</span></a></li>
                        <li className='my-2 bg-zinc-800 w-[200px] p-2 rounded'><a href={`/profile/${id}`} className=' flex items-center justify-between px-4 '><img src={Img4} alt="" width={25} className='' /><span className=''>Profile</span></a></li>

                        <li className='my-2 w-[200px] p-2 rounded' style={{ backgroundColor: "#FF4400" }}><a href='!' className=' flex items-center justify-center px-4 '>POST</a></li>
                    </ul>

                </div>
            </div>



            <div className="box-main w-[100%] h-[auto] flex items-center justify-between">

                <div className="main-box-left w-[30%] h-[auto] bg-lime-500">

                </div>

                <div className="main-box-right w-[68%] h-[auto] p-4 mt-[20vh]">

                    <div className="post-blog ">

                        <div className="head">
                            <h1 className='text-2xl font-bold uppercase underline'>Profile</h1>
                        </div>

                        <div className="post bg-gray-800 w-[90%] h-[30vh] mt-5 rounded  p-3 flex justify-items-start items-center">

                            <h1 className='text-4xl font-bold text-white'>Hi , {loginUser.username} </h1>

                        </div>

                        <div className="box-view mt-4 z-20">

                            <ul className="nav nav-pills bg mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item " role="presentation">
                                    <button className="nav-link active text-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" >Your Post</button>
                                </li>
                                <li className="nav-item mx-2" role="presentation">
                                    <button className="nav-link text-white " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" >Workout Plan</button>
                                </li>
                                <li className="nav-item mx-2" role="presentation">
                                    <button className="nav-link text-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Meal Plan</button>
                                </li>

                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="  tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>

                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                                    <div class="list-group w-[60%] mt-4 z-50">

                                        <div className=' bg-slate-700 mb-2 rounded-t p-3'>

                                            <div className="head flex items-center justify-start">

                                                <img src={Login} alt="" width={40} className='rounded-full' />
                                                <div className='grid'>
                                                    <h1 className=' mx-3 font-bold text-xl'>{loginUser.username} </h1>
                                                    <p className=' mx-3'>Workout plan</p>
                                                </div>
                                            </div>




                                        </div>

                                        {
                                            data.map((item => (

                                                <div class="list-group-item list-group-item-action border-b-4" style={{ backgroundColor: "#212F3D", color: "#FFF" }}>

                                                    <div class="d-flex w-100 justify-content-between">

                                                        <h5 class="mb-1 text-2xl font-bold " style={{ color: "#FF4400" }}>{item.exerciseName}</h5>
                                                        <small class="text-body-secondary font-bold mt-3 "><a href={`/wdedit/${item.id}`} className=' rounded bg-green-600 p-1'>EDIT</a></small>
                                                    </div>

                                                    <div className="set flex items-start justify-start mt-2 ">
                                                        <p className=' font-bold text-xl text-white  p-1 mr-3'>Sets X Reps </p>
                                                        <p className=' font-bold text-xl text-white border p-1'>{item.sets}</p>
                                                        <p className=' mx-2 font-bold text-xl p-1 text-white'>X</p>
                                                        <p className=' font-bold text-xl text-white border p-1 mr-8'>{item.reps}</p>

                                                        <a href={item.link}><img src={Img6} alt="" width={45} /></a>
                                                    </div>
                                                </div>

                                            )))
                                        }

                                        <form onSubmit={hadleComment} className='flex items-center justify-center  bg-neutral-800'>

                                            <div className='w-[120px] flex items-center justify-center  bg-neutral-800'><img width={30} src={Like} alt="" className='m-2'

                                                onClick={() => {

                                                    if (likeset === false) {
                                                        const data = {
                                                            id: like.id,
                                                            pid: like.pid,
                                                            likes: like.likes + 1
                                                        }
                                                        axios.post('http://localhost:8080/api/v1/like/savelike', data).then((res) => {


                                                            setLikeSet(true)
                                                        }).catch((error) => {
                                                            // Handle errors
                                                        });

                                                    } else if (likeset === true) {
                                                        const data = {
                                                            id: like.id,
                                                            pid: like.pid,
                                                            likes: like.likes - 1
                                                        }

                                                        axios.post('http://localhost:8080/api/v1/like/savelike', data).then((res) => {


                                                            setLikeSet(false)
                                                        }).catch((error) => {
                                                            // Handle errors
                                                        });

                                                    }


                                                }} />{like.likes}</div>


                                            {/* <input type="text" onChange={(e) => {
                                                setCommnt(e.target.value)
                                            }} className='w-[500px]  p-3 outline-none text-black ml-3 ' placeholder='Enter Your Comment' /> */}
                                            {/* <input type="submit" value="POST" className='w-[120px] p-3  rounded-none bg-neutral-800' /> */}
                                        </form>




                                        <div class="dropdown w-[100%]">
                                            <button class=" w-[100%] btn-secondary bg-slate-700 rounded-b dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">SEE COMMENT</button>

                                            <ul class="dropdown-menu w-[100%] bg-slate-700 text-white">

                                                <p className='p-2'>
                                                    <ul>
                                                        {
                                                            cdata.map((item => (
                                                                <li className='my-2  p-2 rounded flex  items-center justify-between'>
                                                                    <span className=' grid'>
                                                                        <span className=' text-sm font-bold'>{item.usName}</span> <span className=' flex'><img src={Login} alt="" width={30} className='rounded-full me-3' />{item.comment}</span>
                                                                    </span>
                                                                    <span className=' cursor-pointer text-sm text-red-500' onClick={() => {
                                                                        axios.delete('http://localhost:8080/api/v1/comment/deletecomment/' + item.id).then((res) => {
                                                                            Notify('Comment Deleted')
                                                                            // Reload the page after 2000 milliseconds (2 seconds)
                                                                            setTimeout(function () {
                                                                                window.location.reload();
                                                                            }, 2000);

                                                                        }).catch((err) => {
                                                                            alert('Failed to delete Comment')
                                                                        })

                                                                    }}  >DELETE</span>
                                                                </li>
                                                            )))
                                                        }
                                                    </ul>
                                                </p>

                                            </ul>
                                        </div>



                                    </div>


                                </div>


                                <div

  className="tab-pane fade"
  id="pills-contact"
  role="tabpanel"
  aria-labelledby="pills-contact-tab"
  tabIndex="0"
>
  <a href={`/mealfeed/${id}`} className="btn btn-primary">
    View Meal Plans
  </a>
</div>



                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"> </div>


                            </div>





                        </div>



                    </div>
                </div>
            </div>



            <ToastContainer />

        </div >
    )
}

export default Profile