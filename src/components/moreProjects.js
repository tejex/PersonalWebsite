import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function(){
  React.useEffect(()=>{
    Aos.init({duration:3000})
  },[]);
  const extraProjects={
    "Weather API Application":{
      name:"Weather App",
      description:"View the current weather in a city of your choosing",
      technologies:"Node.js express.js HTML CSS",
      gitHub:"https://github.com/tejex/Weather-API-App"
    },
    "RESTful API":{
      name:"RESTful API",
      description:"Personal REST API built with EJS, Express, Mongoose and MongoDB",
      technologies: "JavaScript EJS Mongoose MongoDB",
      gitHub:"https://github.com/tejex/REST-API"
    },
    "flexMap":{
      name:"Flex Map Fitness",
      description:"Application makes use of the geolocation API and the leaflet.js library",
      technologies:"JavaScript HTML CSS Leaflet.js",
      gitHub: "https://github.com/tejex/Flex-Map-Fitness-",
      visit:""
    },
    "Infix to Postfix":{
      name: "Infix to Postfix Calculator",
      description: "Input any mathematicl expression to convert it from its infix to its postfix state",
      technologies: "C++",
      gitHub:"https://github.com/tejex/InfixToPostfix-Calculator"
    },
    "Simon Game":{
      name: "Simon Game",
      description:"Sequenced based game, click a button to add to your sequence, make sure to remeber the entire sequence!",
      technologies:"JavaScript HTML CSS",
      gitHub:"https://github.com/tejex/Simon-Game"
    },
    "newsletter":{
      name:"NewsLetter Signup Portal",
      description:"API focused newsletter signup portal, sign up to receive weekly newsletters : )",
      technologies:"Node.js Express.js HTML CSS Postman",
      gitHub: "https://github.com/tejex/NewsLetter-Signup-Portal",
    }
  }
  return (
    <div className="w-full h-full grid justify-items-center links mb-20" data-aos="fade-right">
      <h1 className="block md:hidden text-5xl font-medium font-bold text-white mb-10">My Projects:</h1>
        <div class="md:row row row-cols-1 row-cols-md-3 g-4 w-9/12  h-full projectLinks">
        {Object.keys(extraProjects).map(project=>{
          return (
            <div class="col">
              <div class="card opacity-60 hover:opacity-100 hover:-translate-y-4 hover:border-neon transition-all duration-250">
                <div class="card-body rounded-md bg-background text-white h-23 md  ">
                  <h4 class="card-title linkTitle">{extraProjects[project]["name"]}</h4>
                  <p class="card-text">{extraProjects[project]["description"]}</p>
                  <p class="techUsed font-bold mt-2">{extraProjects[project]["technologies"]}</p>
                  <a class="fa-brands fa-github" href={extraProjects[project]["gitHub"]}></a>
                </div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}
