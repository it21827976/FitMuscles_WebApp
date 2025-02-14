import React from 'react'
import Nav from './Nav'
import Img1 from '../images/yn.webp'
import Img2 from '../images/md.webp'
import Img3 from '../images/old.webp'
import next from '../images/next.png'
import ImgB from '../images/back.png'
import ImgB2 from '../images/nextt.png'
import logo from '../images/logo.png'
import { useParams } from 'react-router-dom'

const Workplan = () => {

    const { id } = useParams('');

    const addImg = {
        width: "300px",
        height: "250px",
        backgroundImage: `url(${Img1})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    }

    const addImg2 = {
        width: "300px",
        height: "250px",
        backgroundImage: `url(${Img2})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    }

    const addImg3 = {
        width: "300px",
        height: "250px",
        backgroundImage: `url(${Img3})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    }

    const shadow = {
        width: "300px",
        height: "300px",
        boxShadow: "#a8a8a8 1px 0px 3px 6px, #a8a8a8 1px 0px 3px 6px"
    }

    return (
        <div className=' w-[100%] h-[100vh]'>

            <div className="back flex items-center  justify-evenly p-4">
                {/* <a href="/workplan"><img src={ImgB} alt="" width={35} className='m-4 ' /></a> */}
                <img src={logo} alt="logo.png" width={160} />

                {/* <a href="/workplan"><img src={ImgB2} alt="" width={35} className='m-4 ' /></a>  */}


            </div>
            <hr className='bg-white' />

            <div className="head-text flex items-center justify-center w-[100%] h-[30vh]">
                <div className="block">
                    <h1 className='text-5xl font-bold text-center tracking-wide '>BUILD YOUR PERFECT BODY</h1>
                    <h2 className='mt-3 text-2xl font-bold text-center tracking-wide'>ACCORDING TO YOUR AGE AND BMI</h2>
                </div>
            </div>

            <div className="boxs flex items-center justify-center " style={{ width: "100%", height: "50vh" }}>

                <div className="box1 rounded bg-slate-700 grid items-center justify-center" style={shadow} >

                    <div className="imgblock " style={addImg}>
                    </div>

                    <a href={`/bodydata/${id}`}>
                        <div className="box1-text w-[100%] h-[auto] py-1 px-2 flex items-center justify-between" style={{ backgroundColor: "#FF4400" }}>
                            <span className=' font-bold text-xl'>Age: 18-35</span>
                            <span className=' font-bold text-xl'><img src={next} alt="" /></span>
                        </div>
                    </a>

                </div>

                <div className="box1 mx-14 rounded bg-slate-700 grid items-center justify-center" style={shadow} >

                    <div className="imgblock " style={addImg2}>
                    </div>

                    <a href={`/bodydata/${id}`}>
                        <div className="box1-text w-[100%] h-[auto] py-1 px-2 flex items-center justify-between" style={{ backgroundColor: "#FF4400" }}>
                            <span className=' font-bold text-xl'>Age: 35-50</span>
                            <span className=' font-bold text-xl'><img src={next} alt="" /></span>
                        </div>
                    </a>

                </div>

                <div className="box1 rounded bg-slate-700 grid items-center justify-center" style={shadow} >

                    <div className="imgblock " style={addImg3}>
                    </div>

                    <a href={`/bodydata/${id}`}>
                        <div className="box1-text w-[100%] h-[auto] py-1 px-2 flex items-center justify-between" style={{ backgroundColor: "#FF4400" }}>
                            <span className=' font-bold text-xl'>Age: 50+</span>
                            <span className=' font-bold text-xl'><img src={next} alt="" /></span>
                        </div>
                    </a>


                </div>
            </div>


        </div>
    )
}

export default Workplan