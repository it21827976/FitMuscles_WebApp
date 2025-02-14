import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ImgB from '../images/back.png'
import ImgB2 from '../images/nextt.png'
import logo from '../images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img from '../images/man1.png'
import info from '../images/info.png'

const AddPlan = () => {

    const { id } = useParams('');


    const [dirOk, setDirOk] = useState(false);

    const [user, setUser] = useState('');

    const [set, setSet] = useState('0');

    const count = useRef(1);


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



    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/bodydata/getonebd/' + id)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);



                if (user.dayhours === 'More than 2 hour') {
                    setSet('12');
                } else if (user.dayhours === 'Less than 2 hour') {
                    setSet('8');
                }


            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const style = {
        color: "#FF4400",
        border: "#FF4400 solid 5px",
        width: "auto",
        height: "auto",
        padding: "4px",
    }

    //const [ images, setImages ] = useState("null");
    const [exerciseName, setExerciseName] = useState();
    const [sets, setSets] = useState();
    const [reps, setReps] = useState();
    const [vLink, setVLink] = useState();
    const [message, setMessage] = useState();

    const hadleSubmit = (e) => {

        e.preventDefault();

        count.current += 1;
        setReps("")
        setSets("")
        setExerciseName("")
        setVLink("")
        setMessage("")

        const data = {
            userid: id,
            exerciseName: exerciseName,
            sets: sets,
            reps: reps,
            link: vLink
        }

        

        

        axios.post('http://localhost:8080/api/v1/workop/savewop', data).then(() => {
            Notify("ADD SUCCESS");
        }).catch((err) => {
            Notify2("ADD ERROR");
        })


    }

    const errPrint = (fname) => {
        if (fname.length < 3) {
          document.getElementById('err1').innerHTML = "less charactor";
          document.getElementById('err1').style.color = "red";
          //document.getElementById('net1').style.border = "2px solid red";
        } else if (/^\d/.test(fname)) {
          document.getElementById('err1').innerHTML = "can't start number";
          document.getElementById('err1').style.color = "red";
          //document.getElementById('net1').style.border = "2px solid red";
        }
        else {
          document.getElementById('err1').innerHTML = "Success";
          document.getElementById('err1').style.color = "#009150";
          //document.getElementById('net1').style.border = "2px solid #1a191a00";
        }
        setTimeout(function () {
          document.getElementById('err1').innerHTML = " ";
        }, 6000); // 2000 milliseconds (2 seconds)
      }


      const errPrint2 = (url) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    
        if (!urlRegex.test(url)) {
            document.getElementById('err2').innerHTML = "Not valid URL";
            document.getElementById('err2').style.color = "red";
        } else {
            document.getElementById('err2').innerHTML = "Success";
            document.getElementById('err2').style.color = "#009150";
        }
    
        setTimeout(function () {
            document.getElementById('err2').innerHTML = "";
        }, 6000);
    }
    




    return (
        <div className='w-[100%] h-[100vh]'>

            <div className="back flex items-center  justify-evenly">
                <a href={`/profile/${id}`}><img src={ImgB} alt="" width={35} className='m-4 ' /></a>
                <img src={logo} alt="logo.png" width={160} />
                {
                    dirOk ? <a href="/checkplan"><img src={ImgB2} alt="" width={35} className='m-4 ' /></a> : <a href={`/profile/${id}`}><img src={ImgB2} alt="" width={35} className='m-4 ' /></a>
                }

            </div>


            <hr className='bg-white' />

            <div className="box-cen flex items-center justify-around w-[100%] h-[100vh]">

                {
                    count.current === 9 ? <div className='w-[60%] h-48 rounded bg-slate-800 flex items-center justify-center'>

                        <div className="box block justify-center items-center text-center">
                            <h1 className=' capitalize text-4xl font-bold rounded grid justify-center items-center text-center'>🔥your schedule create successful 🔥</h1>
                            <button type="button" class="btn  uppercase mt-4 w-[40%]" style={{ backgroundColor: "#FF4400" }}><a href={`/profile/${id}`}>SEE schedule</a> </button>


                        </div>
                    </div>


                        : <>
                            <div id='manImgid' className="manimg flex items-center justify-center " >
                                <img src={Img} alt="" width={180} className='mt-3' />

                            </div>

                            <div className="formdata w-[45%]  rounded" >

                                <div className="headtext">
                                    <h1 className='text-4xl flex items-center justify-between font-bold text-center tracking-wide mb-4' style={style}>
                                        Create schedule
                                        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <img src={info} alt="" width={40} />
                                        </button></h1>
                                </div>

                                <h1 className='text-4xl flex items-center justify-between font-bold text-center tracking-wide mb-4 text-white underline'>Workout {count.current}</h1>

                                <form onSubmit={hadleSubmit} className=' font-bold'>

                                    <div className="form-group-box flex items-center justify-between  text-black">


                                        <div className="box">
                                            <label for="exampleFormControlInput1" class="flex items-center justify-between form-label w-[260px] text-white"><span>Exercise Name</span> <span id='err1'></span></label>
                                            <input type="text" name="weight" value={exerciseName} placeholder="Enter Exercise Name" className="form-control p-2" id="exampleFormControlInput1 net1"  title='Please Enter Valid Name' onChange={(e) => {
                                                setExerciseName(e.target.value)
                                            }} 
                                            
                                            onKeyUp={(e) => {
                                                errPrint(e.target.value);
                                            
                                            }}
                                            />

                                        </div>

                                        <div className="box">
                                            <label for="exampleFormControlInput1" class="flex items-center justify-between form-label w-[260px]  text-white"><span>Exercise Video Link</span> <span id="err2"></span></label>
                                            <input type="text" name="weight" value={vLink} placeholder="Exercise Video Link" className="form-control p-2 " id="exampleFormControlInput1" onChange={(e) => {
                                                setVLink(e.target.value)
                                            }}
                                            
                                            onKeyUp={(e) => {
                                                errPrint2(e.target.value);
                                            }}
                                            
                                            />

                                        </div>

                                        

                                    </div>

                                    <div className="form-group-box mt-3 flex items-center justify-between  text-black">

                                        <div className="box">
                                            <label for="exampleFormControlInput1" class="form-label text-white w-[260px]">No of Sets</label>
                                            <input type="number" value={sets} name="Height" placeholder="Sets Count" className="form-control p-2 " id="exampleFormControlInput1" onChange={(e) => {
                                                setSets(e.target.value)
                                            }} />

                                        </div>

                                        <div className="box">
                                            <label for="exampleFormControlInput1" class="form-label w-[260px] text-white">No of Reps</label>
                                            <input type="number" name="weight" value={reps} placeholder="Reps Count" className="form-control p-2" id="exampleFormControlInput1" onChange={(e) => {
                                                setReps(e.target.value)
                                            }} />

                                        </div>

                                    </div>

                                    <button type="submit" className='mt-4 rounded p-2  font-bold w-[100%] ' style={{ background: "#FF4400" }}>ADD NEXT</button>


                                </form>




                            </div>
                        </>

                }


            </div>





            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered b">
                    <div className="modal-content bg-slate-900">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-bold text-orange-600" id="exampleModalLabel">🔥 More Info </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h1 className=' capitalize font-bold text-orange-600 text-xl text-center'>according your data we suggest you to create <br></br> {<span className=' bg-red-700 text-white px-2 rounded'>{set} Set workout plan</span>} </h1>
                        </div>

                    </div>
                </div>
            </div>

            <ToastContainer />

        </div>
    )
}

export default AddPlan