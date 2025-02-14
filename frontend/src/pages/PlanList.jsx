import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import Img from '../images/it1.jpg'
import next from '../images/next2.png'
import axios from 'axios'

const PlanList = () => {

    const { id } = useParams('');
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/workop/getonewop/' + id).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => { })
    }, [])

    return (
        <div className='w-[100%] h-[auto]' >

            <Nav />

            <div className="box-content flex justify-center align-middle items-center w-[100%] h-[auto] ">

                <div className="next-box w-[38%]">
                    <div className="text text-center my-5">
                        <h1 className='text-2xl uppercase font-extrabold underline'>EXERCISES schedule</h1>
                    </div>

                    <ul className='item-box'>

                        {
                            data.map((item => (
                                <li className='mt-3 bg-white rounded hover:bg-slate-500'>
                                    <div className="item flex items-center justify-between p-3">

                                        <div className=' rounded img w-[auto] h-[auto]' style={{ objectFit: "cover", height: "auto" }}>
                                            <img src={Img} className=' rounded ' width="50" alt="" />
                                        </div>

                                        <div className="text-1   text-black">
                                            <h1 className='text-3xl font-bold'>{item.exerciseName}</h1>
                                            <div className="box-re flex items-start justify-center mt-2">
                                                <p className=' font-bold text-xl text-orange-600'>{item.sets}</p>
                                                <p className=' mx-2 font-bold text-xl text-black'>X</p>
                                                <p className=' font-bold text-xl text-orange-600'>{item.reps}</p>
                                            </div>
                                        </div>

                                        <div className="img-go text-black mx-2">

                                            <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <img src={next} width={45} alt="" />
                                            </button>


                                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered b">
                                                    <div className="modal-content bg-slate-900">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5 font-bold text-orange-600" id="exampleModalLabel">🔥 More Info </h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <h1 className=' capitalize font-bold text-orange-600 text-xl text-center'>{item.id}according your data we suggest you to create <br></br> </h1>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </li>
                            )))
                        }










                    </ul>

                </div>



            </div>





        </div>
    )
}

export default PlanList