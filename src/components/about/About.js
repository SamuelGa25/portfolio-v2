

import "./about.css"

import Me2 from "../../img/developer.jpg"

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
         </div>


        </div>
    )
} 

export default About 