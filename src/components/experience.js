import React from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { Button } from "react-scroll";

export default function(){

  const [company,setCompany] = React.useState('Amazon')

  React.useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  const experiences={
    Amazon:{
      company:"Amazon",
      logo:"../images/amazon.png",
      jobTitle:"Software Engineer Intern",
      duration:"June 2023 - August 2023",
      description:[
        "Incoming SDE Intern, Summer 2023."
      ]
    },
    XR_Technologies:{
      company:"XR_Technologies",
      logo:"../images/amazon.png",
      jobTitle: "Software Engineer Intern",
      duration:"May 2022 - August 2022",
      description:[
        "Made use of  technologies such as Javascript and React to design and develop interactive web applications",
        "Utilized frameworks including React and Bootstrap to enhance interactive nature of web applications",
        "Acquired fundamental knowledge of React, Angular and Node.js during internship experience",
        "Developed a wide variety of web development skills including JavaScript, HTML, CSS, React, Redux, Typescript, Node.js and Angular"
      ]
    },
    TechPoint:{
      company:"TechPoint",
      logo:"../images/amazon.png",
      jobTitle:"UI / UX Design Intern",
      duration:"May 2022 - August 2022",
      description:[
        "Worked in a team of 10 to design an innovative solution to increase tech jobs in Indiana",
        "Developed a user friendly UI for the solution as a member of the production group",
        "Obtained various skills from this internship experience such as the importance of working in a team in the tech industry",
        "Part of the winning team for the Tech Jobs in Indiana category in TechPoint's The Pitch competition."
      ]
    }
}

  function handleClick(event){
    setCompany(event.target.value);
  } 

  const jobCard =(
    <div className="hidden md:block ml-10 card text-white bg-background border-white jobCard">
      <div className="card-body">  
      <div className="flex">
        <img className="w-10 rounded-md" src={require(`../images/${experiences[company].company}.png`)} />    
        <h3 className="text-3xl font-bold ml-5">{experiences[company].company}</h3> 
      </div>    
        <br/>
        <h5>{experiences[company].jobTitle}</h5>
        <br/>
        <p>{experiences[company].duration}</p>
        {experiences[company].description.map(description=>{
            return (
              <p className="mt-1"><i class="fa-solid fa-arrow-right text-neon"></i> {description}</p>
            )
          })}
    </div>
  </div>
  )

  




  return (
    <div data-aos="fade-left" className="h-5/6">
    <h3 className="hidden md:block ml-36 mb-20 text-5xl font-medium font-bold text-white expTitle">Work Experience:</h3>
    <div id="experience"className="hidden md:flex flex-row ml-40 mr-40 mb-40 experience">
      <div className="expButtons grid grid-row-1 gap-10 h-full">
        {Object.keys(experiences).map((company,index)=>{
          return (
            <button 
            className="btn btn-outline-light border-neon jobButton h-full" 
            key={index} 
            onClick={handleClick} 
            value={company}
            >{company}</button>
          )
        })}
      </div>
      {jobCard}  
    </div>
    </div>
  )
}

