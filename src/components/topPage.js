import React, { useEffect, useState } from "react"
import Typewriter from 'typewriter-effect';
import "aos/dist/aos.css"


export default function(){

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDisplay(true);
    }, 3500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const links ={
    "linkedin":{
      name:"fa fa-brands fa-linkedin fa-fw",
      href:"https://www.linkedin.com/in/bamlak-deju-b1a9a8218/",
    },
    "instagram":{
      name:"fa fa-brands fa-instagram fa-fw",
      href:"https://www.instagram.com/teju.32/",
    },
    "mail":{
      name:"fa fa-solid fa-paper-plane fa-fw",
      href:"mailto:bamlak.deju125@gmail.com",
    },
    "resume":{
      name:"fa fa-solid fa-file fa-fw",
      href:"https://docs.google.com/document/d/14KDDS7lQB_Fy9IOlHFEGe6M9uAtNxHrodqPCMjjI2as/edit?usp=share_link",
    }
  }
  //Original: https://drive.google.com/file/d/1walBdmvEfHu4vO_vGMZD-FyXNneKK_c2/view?usp=sharing

  const mediaLinks = (
    <div className= {display ? 'text-2xl contactIcon transition-all duration-250 mediaLinks' : 'opacity-0'}>
      {Object.keys(links).map((linkItem,i) =>{
        return(
          <a key={i} href={links[linkItem]["href"]} className={links[linkItem]["name"]}></a>
        )
      })}
    </div>) 
    
  const description = (
      <div className={display ? "mt-10 text-2xl font-medium md:text-4xl text-ellipsis transition-all duration-250 opacity-50 description" : "opacity-0"} >
        <h3>I enjoy creating and building software,</h3>
        <h3>have a look around and thanks for visiting!!</h3>
      </div>
  )

  return (
    <div id="TopPage" className="ml-20 mt-10 mr-20 md:pb-56 md:ml-40 md:mt-40 sm:ml-5 sm:mr-5 text-ellipsis text-white topPage">
    <div className="text-2xl font-bold md:text-4xl greetingType pl-1">
    <Typewriter
      options={{
        autoStart: false,
        loop: false,
        delay:75,
        cursor:''
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("Hello, my name is")
        .start()
        .pauseFor(100)
      }}
    />
  </div>
  <div className="text-7xl font-bold text-ellipsis md:text-9xl sm:text-base  myName">
      <Typewriter
       options={{
        autoStart: false,
        loop: false,
        delay:100,
        cursor:''
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("")
        .start()
        .pauseFor(1500)
        .typeString("Bamlak Deju Abera")
      }}
    />
    </div>
    {description}
    {mediaLinks}
    </div>
  )
}