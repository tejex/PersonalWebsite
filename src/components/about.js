import React, { useEffect, useState } from "react"
import Scroll from 'react-scroll'
import {Link} from "react-scroll"
import Aos from "aos"
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

  React.useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  const aboutMe =(
    <div id="about" className={display ?"mb-10 hidden md:block"  : "opacity-0"} >
      <h1 className="text-5xl font-medium font-bold mb-8 aboutTitle">About me:</h1>
        <p className="lead">I'm a passionate full stack developer with a keen interest in both front and back-end development. </p>
        <p className="lead">I really enjoy working with react to build full stack applications and bringing my project ideas to life, 
        you can check some of them out <Link className="link text-neon cursor-pointer" to="mainProjects"> here</Link></p>
        <br/>
        <p className="lead">I'm currently a senior majoring in computer science at
         <a href="https://www.depauw.edu/" className="text-neon"> Depauw University</a>.
        </p>
        <p className="lead">Here are some technologies i've worked with:</p>

    </div>
  )

  const technologies = [
    'Javascript','Node.js','Python','HTML',
    'Express.js','Flutter','CSS','C++',
    'Swift','React.js','Java']

  const interests =(
      <div className={display ?"hidden md:block" : "opacity-0" }>
      <p className="lead">Besides work I really enjoy playing basketball, soccer, working out and I also like to play video games</p>
      </div>
    )

  const myCard =(
    <div className={display ?'ml- md:ml-0 w-80 lg:w-60 2xl:w-80 text-center transition ease-in-out opacity-100 aboutMe' : 'opacity-0'}>
    <div className="card-bodyBam items-center">
    <img className="w-80 rounded-full md:rounded-lg lg:w-60 2xl:w-80 card-img-top justify-start cardPic" src={require('../images/profilePic3.png')} alt="Card image cap"></img>
      <br/>
      <h5 className="card-title">Bamlak Deju Abera 🇪🇹</h5>
      <br/>
      <p className="card-text">Fourth year computer science student at Depauw University</p>
      <a className="btn font-medium text-white border-neon mt-2 email-link" href={`https://www.linkedin.com/in/bamlak-deju-b1a9a8218/`}>
        My LinkedIn
      </a>
      </div>
    </div>
  )

  const tech = (
    <div className={display ? "mb-10 hidden md:block technologies"  : "opacity-0"} >

          <ul className="w-80 grid grid-cols-2 md:grid grid-rows-4 grid-flow-col">
            {technologies.map((tech,index) =>{
                return (
                  <li key={index} className="mt-1"><i className="mt-1 fa-solid fa-arrow-right text-neon"></i> {tech}</li>
                )
              })}
          </ul>
        </div>
  )


  return (
  <div id="MiddlePage" data-aos="fade-up" className="w-full md:ml-36 mb-36 mt-36 flex flex-row text-white middlePage">
      <div className=" md:w-9/12">
        {aboutMe}
            {tech}
          {interests}
            <br/>
      </div>
      <div className="w-full grid justify-items-center">
      {myCard}
      </div>
  </div>
  )
}
