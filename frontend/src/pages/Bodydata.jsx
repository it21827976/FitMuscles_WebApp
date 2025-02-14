import React, { useState } from 'react'
import Img1 from '../images/man.webp'
import Img from '../images/man1.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImgB from '../images/back.png'
import ImgB2 from '../images/nextt.png'
import logo from '../images/logo.png'
import BG from '../images/bg1.jpg'
import { useParams } from 'react-router-dom';


const Bodydata = () => {

    const {id} = useParams('');

    function Notify() {
        toast.success('Save Success', {
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

    function Notify2() {
        toast.error('Failed', {
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

    function Notify3() {
        toast.warning('Password not match', {
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

    const style = {
        color: "#FF4400",
        border: "#FF4400 solid 5px",
        display: "inline-block",
        padding: "5px",
    }
    const addImg = {

        backgroundImage: `url(${BG})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
    }


    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [exercise, setExercise] = useState('');
    const [hour, setHour] = useState('');

    const [dirOk, setDirOk] = useState(false);


    const hadleSubmit = (e) => {
        e.preventDefault();
        const data = {
            userid: id,
            height: height,
            weight: weight,
            weekworkout: exercise,
            dayhours: hour,
        }

        axios.post('http://localhost:8080/api/v1/bodydata/savebd', data
        ).then(() => {
            Notify();
            setDirOk(true);

            setTimeout(() => {
                window.location = `/addplan/${id}`;
                
            }, 3000);

        }).catch((err) => {
            Notify2();
        })

        console.log(data);
    }

    return (

        <div className='w-[100%] h-[100vh]' >

            <div className="back flex items-center  justify-evenly">
                <a href={`/workplan/${id}`}><img src={ImgB} alt="" width={35} className='m-4 ' /></a>
                <img src={logo} alt="logo.png" width={160}/>
                {
                    dirOk ? <a href={`/profile/${id}`}><img src={ImgB2} alt="" width={35} className='m-4 ' /></a> : <a href={`/profile/${id}`}><img src={ImgB2} alt="" width={35} className='m-4 ' /></a>
                }

            </div>

            <hr className='bg-white' />
            <div className="box flex items-center justify-around w-[100%] h-[90vh]" >

                <div id='manImgid' className="manimg flex items-center justify-center " >
                    <img src={Img} alt="" width={180} className='mt-3' />

                </div>

                <div className="formdata w-[45%]  rounded">

                    <div className="headtext">
                        <h1 className='text-4xl font-bold text-right tracking-wide mb-4' style={style}>Enter Your Details</h1>
                    </div>

                    <div className="form-data text-xl font-bold">

                        <form onSubmit={hadleSubmit} className=' font-bold'>

                            <div className="form-group-box flex items-center justify-between  text-black">

                                <div className="box">
                                    <label for="exampleFormControlInput1" class="form-label text-white w-[260px]">Height [CM]</label>
                                    <input type="number" name="Height" placeholder="Enter Your Weight" className="form-control p-2 " id="exampleFormControlInput1" onChange={(e) => {
                                        setHeight(e.target.value)
                                    }} />

                                </div>

                                <div className="box">
                                    <label for="exampleFormControlInput1" class="form-label w-[260px] text-white">Weight [KG]</label>
                                    <input type="number" name="weight" placeholder="Enter Your Weight" className="form-control p-2" id="exampleFormControlInput1" onChange={(e) => {
                                        setWeight(e.target.value)
                                    }} />

                                </div>

                            </div>



                            <div className="form-group-box flex items-center justify-between mt-3 text-black w-[100%]">

                                <div className="box w-[100%]">
                                    <label for="exampleInputEmail1" class="form-label text-blue-50">How many days a week do you exercise?</label>
                                    <select class="form-select p-2" aria-label="Default select example" onChange={(e) => {
                                        setExercise(e.target.value)
                                    }}>
                                        <option value="null">----- Select -----</option>
                                        <option value="Less than 2 days">Less than 2 days</option>
                                        <option value="3-4 days a week">3-4 days a week</option>
                                        <option value="Every day of the week">Every day of the week</option>
                                    </select>
                                </div>

                            </div>


                            <div className="form-group-box flex items-center justify-between mt-3 text-black w-[100%]">

                                <div className="box w-[100%]">
                                    <label for="exampleInputEmail1" class="form-label text-blue-50">How many hours do you need to exercise?</label>
                                    <select class="form-select p-2" aria-label="Default select example" onChange={(e) => {
                                        setHour(e.target.value);
                                    }}>
                                        <option value="null">----- Select -----</option>
                                        <option value="Less than 2 hour">Less than 2 hour</option>
                                        <option value="More than 2 hour">More than 2 hour</option>
                                    </select>
                                </div>
                            </div>


                            <button type="submit" className='mt-4 rounded p-2  font-bold w-[100%] ' style={{ background: "#FF4400" }}>NEXT</button>
                        </form>
                    </div>


                </div>

            </div>

            <ToastContainer />

        </div>
    )
}

export default Bodydata