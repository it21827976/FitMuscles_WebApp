import React, { useEffect, useRef, useState } from 'react'
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
import MealFeedHome from './MealFeedHome'


const Home = () => {


    const { id } = useParams(' ');

    if (id === undefined) {
        window.location.href = '/login'
    }


    const [data, setData] = useState([]);
    const [cdata, setcData] = useState([]);
    const [loginUser, setLoginUser] = useState([]);
    const [likedata, setLikeData] = useState([]);


    const getLikes = () => {

        axios.get('http://localhost:8080/api/v1/like/getlike').then((res) => {
            setLikeData(res.data);
            console.log(res.data);
        }).catch((err) => { })
    }

    useEffect(() => {
        getLikes();
    }, [])


    useEffect(() => {
        const getLoginData = () => {

            axios.get('http://localhost:8080/api/v1/user/getOne/' + id).then((res) => {
                setLoginUser(res.data);
                console.log(res.data);
            }).catch((err) => { })
        }
        getLoginData();
    }, [id])



    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/workop/getwop').then((res) => {
            setData(res.data);
            console.log(res.data);

        }).catch((err) => { })

    }, [])

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/comment/getcomment').then((res) => {
            setcData(res.data);
            console.log(res.data);
        }).catch((err) => { })

    }, [])



    let [like, setLike] = useState(0);

    const [coment, setCommnt] = useState('')

    const [user, setUser] = useState([])

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/user/getAll').then((res) => {
            setUser(res.data);
            console.log(res.data);
        }).catch((err) => { })

    }, [])


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

    const [likeset, setLikeSet] = useState(false);
    const [stFLO, setFLO] = useState('Follow')


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
                            <h1 className='text-2xl font-bold uppercase underline'>latest posts</h1>
                        </div>



                        <div className=''>
                            {
                                user.map((item2) => {

                                    if (item2.userid != null) {

                                        return <>

                                            <div className="post  w-[70%] h-[auto]  rounded my-5">


                                                <div class="list-group w-[90%] mt-4 z-50 ">

                                                    <div className=' bg-slate-700 mb-2 rounded-t p-3'>

                                                        <div className="head flex items-center justify-start">

                                                            <img src={Login} alt="" width={40} className='rounded-full' />
                                                            <div className='grid'>
                                                                <h1 className=' mx-3 font-bold text-xl'>{item2.username}</h1>
                                                                <p className=' mx-3'>Workout plan</p>
                                                            </div>
                                                            {/* <button onClick={(e) => {
                                                                setFLO('Followed')
                                                            }} className=" ml-52  hover:bg-orange-700 text-white font-bold py-1 px-2 rounded" style={{ backgroundColor: "#FF4400" }}>
                                                                Follow
                                                            </button> */}

                                                        </div>

                                                    </div>

                                                    {
                                                        data.filter(item => {
                                                            return item.userid === item2.userid;
                                                        }).map((filteredItem, index) => {
                                                            return (

                                                                <>
                                                                    <div key={index} class="list-group-item list-group-item-action border-b-4" style={{ backgroundColor: "#212F3D", color: "#FFF" }}>
                                                                        <div class="d-flex w-100 justify-content-between">
                                                                            <h5 class="mb-1 text-2xl font-bold" style={{ color: "#FF4400" }}>{filteredItem.exerciseName}</h5>
                                                                        </div>
                                                                        <div className="set flex items-start justify-start mt-2 ">
                                                                            <p className='font-bold text-xl text-white p-1 mr-3'>Sets X Reps </p>
                                                                            <p className='font-bold text-xl text-white border p-1'>{filteredItem.sets}</p>
                                                                            <p className='mx-2 font-bold text-xl p-1 text-white'>X</p>
                                                                            <p className='font-bold text-xl text-white border p-1 mr-8'>{filteredItem.reps}</p>
                                                                            <a href={filteredItem.link}><img src={Img6} alt="" width={45} /></a>
                                                                        </div>
                                                                    </div>
                                                                </>


                                                            );
                                                        })


                                                    }

                                                    {
                                                        <div class="dropdown w-[100%]">
                                                            <button class=" w-[100%] btn-secondary bg-slate-700 rounded-b dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">SEE COMMENT</button>

                                                            <ul class="dropdown-menu w-[100%]  bg-slate-700 text-white">
                                                                {
                                                                    // Filter the cdata array based on your condition
                                                                    cdata.filter(item3 => {
                                                                        return item3.pid === item2.userid;
                                                                    }).map((filteredItem, index) => (
                                                                        <p className='p-2'>
                                                                            <ul>
                                                                                <li key={index} className='my-2 p-2 rounded flex items-center justify-between'>
                                                                                    <span className='grid'>
                                                                                        <span className='text-sm font-bold'>{filteredItem.usName}</span>
                                                                                        <span className='flex'>
                                                                                            <img src={Login} alt="" width={30} className='rounded-full me-3' />
                                                                                            <input type="text" className='bg-transparent outline-none border-none' disabled value={filteredItem.comment} />
                                                                                        </span>
                                                                                    </span>
                                                                                    <div>
                                                                                        <span className='cursor-pointer text-sm text-red-500' onClick={() => {
                                                                                            axios.delete('http://localhost:8080/api/v1/comment/deletecomment/' + filteredItem.id)
                                                                                                .then((res) => {
                                                                                                    Notify('Comment Deleted');
                                                                                                    // Reload the page after 2000 milliseconds (2 seconds)
                                                                                                    setTimeout(function () {
                                                                                                        window.location.reload();
                                                                                                    }, 2000);
                                                                                                })
                                                                                                .catch((err) => {
                                                                                                    alert('Failed to delete Comment');
                                                                                                });
                                                                                        }}>DELETE</span>
                                                                                        {/* <span className='mx-2 text-green-500 cursor-pointer text-sm'>EDIT</span> */}
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </p>
                                                                    ))


                                                                }



                                                            </ul>
                                                        </div>

                                                    }


                                                    <form onSubmit={(e) => {

                                                        e.preventDefault();

                                                        const pdata = {
                                                            pid: item2.userid,
                                                            usName: loginUser.username,
                                                            comment: coment
                                                        }
                                                        axios.post('http://localhost:8080/api/v1/comment/savecomment', pdata).then((res) => {
                                                            Notify('Comment Added')

                                                            // Reload the page after 2000 milliseconds (2 seconds)
                                                            setTimeout(function () {
                                                                window.location.reload();
                                                            }, 2000);


                                                        }).catch((err) => {
                                                            alert('Failed to add Comment')
                                                        })

                                                        setgo(coment)



                                                    }} className='flex items-center justify-center  bg-neutral-800'>


                                                        {
                                                            likedata.filter(item4 => {
                                                                return item4.pid === item2.userid;
                                                            }).map((filteredItem, index) => {
                                                                return <>
                                                                    <div className='w-[120px] flex items-center justify-center  bg-neutral-800'><img width={30} src={Like} alt="" className='m-2' onClick={() => {

                                                                        if (likeset === false) {
                                                                            const data = {
                                                                                id: filteredItem.id,
                                                                                pid: filteredItem.pid,
                                                                                likes: filteredItem.likes + 1
                                                                            }
                                                                            axios.post('http://localhost:8080/api/v1/like/savelike', data).then((res) => {

                                                                                getLikes();
                                                                            }).catch((error) => {
                                                                                // Handle errors
                                                                            });
                                                                            setLikeSet(true)
                                                                        } else if (likeset === true) {
                                                                            const data = {
                                                                                id: filteredItem.id,
                                                                                pid: filteredItem.pid,
                                                                                likes: filteredItem.likes - 1
                                                                            }

                                                                            axios.post('http://localhost:8080/api/v1/like/savelike', data).then((res) => {

                                                                                getLikes();
                                                                            }).catch((error) => {
                                                                                // Handle errors
                                                                            });
                                                                            setLikeSet(false)
                                                                        }





                                                                    }} />
                                                                        {filteredItem.likes}


                                                                    </div>
                                                                    



                                                                </>; // Added return statement



                                                            })



                                                        }

                                                        <input type="text" onChange={(e) => {
                                                            setCommnt(e.target.value)
                                                        }} className='w-[500px]  p-3 outline-none text-black ml-3 ' placeholder='Enter Your Comment' />
                                                        <input type="submit" value="POST" className='w-[120px] p-3  rounded-none bg-neutral-800' />
                                                    </form>



                                                </div>

                                            </div>

                                        </>; // Added return statement
                                    }
                                    return null; // Added return statement for other cases
                                })
                            }
                        </div>


                        <MealFeedHome/>



                    </div>
                </div>
            </div>


            <ToastContainer />


        </div>
    )
}

export default Home
