import "./intro.css"

import Me from "../../img/img_me.jpeg"

const Intro = () => {
    return(
        <div className="intro">
           <div className="intro-left">
                <div className="intro-left-first">
                    <h2 className = "intro-line">Hi, My name is </h2>
                    <h1 className = "intro-name">Samuel Garcia </h1>


                    

                    <div className="intro-title">
                        <div className="intro-list">
                            <div className="intro-title-position">Front-End Developer</div>
                            <div className="intro-title-position">Back-End Developer</div>
                            <div className="intro-title-position">Full Stack Developer</div> 
                        </div>
                    </div>

                    <div className="intro-description">
                          
                    </div>

                </div>
            </div> 

           <div className="intro-right">

                <div className="img-cover"></div>
                <img src = {Me} alt = ""className="intro-img"></img>
            
            </div> 
        </div>
    )
}

export default Intro