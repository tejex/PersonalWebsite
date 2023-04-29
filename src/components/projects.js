import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import Aos from "aos"
import "aos/dist/aos.css"
import { set } from "mongoose";

export default function(){

  React.useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  const bestProjects ={
    "incognito":{
      name:"Incognito",
      description: "A back-end focused web application built with Javascript, EJS, HTML and MongoDB. Allows you to submit a secret or any piece of text, anonymously.",
      technologies: "JavaScript HTML CSS EJS MongoDB Passport bcrypt",
      gitHub:"https://github.com/tejex/Anonymous-Secrets-App",
      visit: ""
    },
    "spotifyProject":{
      name:"Spotify User Profile",
      description:"Sign in to your spotify account to reveal your Top Artists, Top Songs, Playlists and other data about your Spotify Profile!!",
      technologies:"Express.js React.js Styled Components Axios Spotify API",
      gitHub: "https://github.com/tejex/spotify-userprofile",
      visit:"https://spotify-userprofile.herokuapp.com"
    },
    "blog":{
      name:"Bookie",
      description:"Blog website built with EJS. Create posts as well as view other people's posts. With sign-in and sign up with google, back-end built with MongoDB.",
      technologies:"JavaScript HTML CSS EJS MongoDB",
      gitHub: "https://github.com/tejex/Bookie",
      visit:""
    }
  }
  const [currentProject,setProject] = React.useState(bestProjects["spotifyProject"]); 

  function changed(event){
    Object.entries(bestProjects).forEach(function(project,index){
      if(event == index){
        setProject(project[1]);
      }
    })
  }


  return(
<div>
  <h1 className="hidden md:ml-36 mb-10 md:block text-5xl font-medium font-bold text-white projectIntros" data-aos="fade-left">My Projects:</h1>
    <div className="hidden md:h-full md:full md:mb-10 md:flex md:ml-40 md:mr-40 mainProjects" data-aos="fade-left" >
  <Carousel className="bottomPage w-8/12 overflow-hidden bg-background carousel-slide rounded-lg" onSelect={changed}>
    {Object.keys(bestProjects).map(project=>{
      return(
      <Carousel.Item className="h-120 lg:h-128">
        <img className="carouselImage d-block w-full md:rounded-3xl img-fluid opacity-90 h-2/4 shadow-inner-2xl" src={require('../images/'+project+'.png')}/>
      </Carousel.Item>
  )
})}
  </Carousel> 
      <div className="card w-4/12 ml-10 bg-background border-white h-10 lg:2/4">
          <div className="card-body items-center text-white">
          <h1 className="text-3xl font-medium font-bold self-auto">{currentProject.name}</h1>
            <br/>
            <h6 className="card-subtitle mb-2 text-muted self-auto">{currentProject.technologies}</h6>
            <br/> 
            <p className="card-text self-auto">{currentProject.description}</p>
            <br/> 
            <a className="fa-brands fa-github" href={currentProject.gitHub}></a>
        </div>
      </div>
    </div>
  </div>
  )
}
