import React from 'react'
import Img from '../images/logo.png'

const Nav = () => {
  return (
    <div className=' bg-black' style={{zIndex:"99999"}}>

        <nav className='fixed flex items-center justify-between w-[100%] h-20 px-3' style={{backgroundColor:"black", borderBottomColor:"#FF4400", borderBottomWidth:"4px" }}>

            <div className="logo">
                <img src={Img} alt="logo.png" width={200}/>
            </div>

            <div className="menu">
                <ul>
                    <li className='py-2 px-3 border-orange-600 border-2 ' onClick={() => {
                        window.location.href='/login'
                    }}><span  className=' text-white text-xl font-bold' >Log Out</span></li>
                </ul>
            </div>


        </nav>




    </div>
  )
}

export default Nav