import React, { useState } from 'react'
import ImgB from '../images/back.png'
import ImgB2 from '../images/nextt.png'
import logo from '../images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img from '../images/man1.png'
import plan from '../images/plan.png'
import plan2 from '../images/food.png'

const CheckPlan = () => {

    const [dirOk, setDirOk] = useState(false);

    const style = {
        color: "#FF4400",
        border: "#FF4400 solid 5px",
        width: "auto",
        height: "auto",
        padding: "4px",
    }

    return (

        <div>

            <div className="back flex items-center  justify-evenly">
                <a href="/workplan"><img src={ImgB} alt="" width={35} className='m-4 ' /></a>
                <img src={logo} alt="logo.png" width={160} />
                {
                    dirOk ? <a href="/checkplan"><img src={ImgB2} alt="" width={35} className='m-4 ' /></a> : <a href="/"><img src={ImgB2} alt="" width={35} className='m-4 ' /></a>
                }

            </div>


            <hr className='bg-white' />
            <div className="box flex items-center justify-around w-[100%] h-[90vh]" >

                <div id='manImgid' className="manimg flex items-center justify-center " >
                    <img src={Img} alt="" width={180} className='mt-3' />

                </div>

                <div className="formdata w-[45%]  rounded">

                    <div className="headtext">
                    </div>

                    <div className="form-data text-xl font-bold">

                        <div className="box" style={{ width: "420px" }}>

                            <a href="/addplan">
                                <span style={style} className='plBox flex mb-4 items-center text-center justify-around'><img src={plan} alt="" width={70} /> <h1 className='text-4xl font-bold mx-2' >Workout Plan</h1></span>

                            </a>
                            
                            <span style={style} className='plBox flex mt-4 items-center text-center justify-around'><img src={plan2} alt="" width={70} /> <h1 className='text-4xl font-bold mx-2' >Meal plan</h1></span>

                        </div>


                    </div>


                </div>

            </div>

            <ToastContainer />





        </div>
    )
}

export default CheckPlan