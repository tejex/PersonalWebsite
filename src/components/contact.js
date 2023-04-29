import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Scroll from 'react-scroll'
import {Link} from "react-scroll"

export default function(){
  React.useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return(
    <div className="grid justify-items-center mt-72">
    <div className="grid justify-items-center">
      <h1 className="text-8xl text-center font-medium font-bold text-white mb-5 ">Get In Touch!!</h1>
      <a className="btn h-1/6 text-4xl font-medium font-bold text-white mt-40 mb-40 border-neon md:w-6/12 md:text email-link" href={`mailto:bamlak.deju125@gmail.com`}>
        Say Hello
      </a>
    </div>
    <div className= "contact mb-2 opacity-50 w-full grid justify-items-center">
    <p className="md:hidden text-xl font-medium font-bold text-white">Visit on your PC to see more : )</p>
    <p className='copyright text-white mb-2 '>Designed and Built By Bamlak Deju Abera <i class="fa-solid fa-copyright"></i></p>
    </div>
    </div>

  )
  }

