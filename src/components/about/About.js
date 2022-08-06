

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

            <h1 className="about-title">About Me</h1>

            <p className="about- desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Soluta perspiciatis officia atque alias! Delectus, nisi ducimus. Itaque, obcaecati 
            officia sapiente architecto illo nostrum provident enim est tempore facilis ad repellendus.
            </p>



         </div>


        </div>
    )
} 

export default About 