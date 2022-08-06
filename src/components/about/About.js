

import "./about.css"

import Me2 from "../../img/developer.jpg"

import resume from "../../img/resume.jpg"
import resume1 from "../../img/SamuelGarciaResume.pdf"

import linkedIn from "../../img/linkedIN.png"
import github from "../../img/github.png"



const About = () => {

    return(
        <div className="about">
            <div className="about-left">
                <div className="about-collage"></div>
                <div className="img2-cover">
                     <img src={Me2} alt= "" className="about-img"/>
                </div>

            </div>

         <div className="about-right">

            <h1 className="about-title">About Me</h1>

            <p className="about-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Soluta perspiciatis officia atque alias! Delectus, nisi ducimus. Itaque, obcaecati 
            officia sapiente architecto illo nostrum provident enim est tempore facilis ad repellendus.
            </p>

            <h2 className="about-links"> Check out my:</h2>

            <div className="about-info">

                <p><a href = "https://github.com/SamuelGa25" target="_blank"> 
                <img src={github} alt= "" className="about-img4"/>
                </a> Github profile</p>
                
              

                <p><a href = "https://www.linkedin.com/in/samuel-garcia-8276621a1/" target="_blank"> 
                <img src={linkedIn} alt= "" className="about-img3"/>
                </a>LinkedIn</p>


                <p><a href = {resume1} target="_blank"> 
                <img src={resume} alt= "" className="about-img2"/>
                </a> Resume</p>

            </div>



         </div>


        </div>
    )
} 

export default About 