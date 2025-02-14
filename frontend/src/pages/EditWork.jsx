
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ImgB from '../images/back.png'
import ImgB2 from '../images/nextt.png'
import logo from '../images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditWork() {

    const { id } = useParams('');


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


    const [user, setUser] = useState('');

    const count = useRef(1);

    const [exerciseName, setExerciseName] = useState();
    const [sets, setSets] = useState();
    const [reps, setReps] = useState();
    const [link, setVLink] = useState();
    const [usid, setUsid] = useState();


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/workop/getwopr/' + id)
            .then((res) => {

                console.log(res.data);
                setUser(res.data);

                setReps(res.data.reps)
                setSets(res.data.sets)
                setExerciseName(res.data.exerciseName)
                setVLink(res.data.link)
                setUsid(res.data.userid)


            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const hadleSubmit = (e) => {

        e.preventDefault();

        count.current += 1;


        const data = {
            id: id,
            userid: usid,
            exerciseName: exerciseName,
            sets: sets,
            reps: reps,
            link: link
        }



        axios.put('http://localhost:8080/api/v1/workop/updatewop', data).then(() => {
            Notify("UPDATE SUCCESS");
            setTimeout(() => {
                window.location = `/profile/${usid}`;
            }, 3000);
        }).catch((err) => {
            Notify2("UPDATE FAILED");
        })


    }

    const hadledelete = () => {
            
            axios.delete('http://localhost:8080/api/v1/workop/deletewop/' + id).then(() => {
                Notify("DELETE SUCCESS");
                setTimeout(() => {
                    window.location = `/profile/${usid}`;
                }, 1000);
            }).catch((err) => {
                Notify2("DELETE FAILED");
            })


    }




    return (


        <div className=' w-[100%] h-[100vh] '>

            <div className="back flex items-center  justify-evenly">
                <a href={`/profile/${usid}`}><img src={ImgB} alt="" width={35} className='m-4 ' /></a>
                <img src={logo} alt="logo.png" width={160} />

                <a href={`/profile/${usid}`}><img src={ImgB2} alt="" width={35} className='m-4 ' /></a>


            </div>
            <hr></hr>


            <div className="head-box flex items-center justify-center">
                <div className="box w-[45%]">

                    <h1 className='text-2xl font-bold uppercase flex items-center justify-between my-16' style={{ color: "#FF4400" }}><span>Edit Workout Plan</span> <button onClick={hadledelete} className='btn bg-red-600 text-white'>DELETE</button></h1>

                    <form onSubmit={hadleSubmit} className=' font-bold mt-5'>

                        <div className="form-group-box flex items-center justify-between  text-black">


                            <div className="box">
                                <label for="exampleFormControlInput1" class="form-label w-[260px] text-white">Exercise Name</label>
                                <input type="text" name="weight" value={exerciseName} placeholder="Enter Exercise Name" className="form-control p-2" id="exampleFormControlInput1" onChange={(e) => {
                                    setExerciseName(e.target.value)
                                }} />

                            </div>

                            <div className="box">
                                <label for="exampleFormControlInput1" class="form-label w-[260px]  text-white">Exercise Video Link</label>
                                <input type="text" name="weight" value={link} placeholder="Exercise Video Link" className="form-control p-2 " id="exampleFormControlInput1" onChange={(e) => {
                                    setVLink(e.target.value)
                                }} />

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

                        <button type="submit" className='mt-4 rounded p-2  font-bold w-[100%] ' style={{ background: "#FF4400" }}>UPDATE</button>


                    </form>



                </div>


            </div>
            <ToastContainer />

        </div>
    )
}

export default EditWork