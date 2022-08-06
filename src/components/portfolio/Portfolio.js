import "./portfolio.css"


import port1 from "../../img/LinguaProject2.gif"
import port2 from "../../img/code-quiz.png"
import port3 from "../../img/work-day-scheduler.gif"
import port4 from "../../img/to-do-list.png"


const Portfolio = () => {

    return(
        <div className="portfolio">

             <div className="port-text">
                <h1 className="port-title">Portfolio</h1>
                <h2>Take a look my Github to check more of my projects! :)</h2>
             </div>

            <div className="port-projects">

                <p><a href = "https://github.com/SamuelGa25/Project-2-Lingua" target="_blank"> 
                <img src={port1} alt= "" className="port-img1"/>
                </a>Lingua Project</p>

                <p><a href = "https://github.com/SamuelGa25/Code-Quiz" target="_blank"> 
                <img src={port2} alt= "" className="port-img2"/>
                </a>Code Quiz</p>

                <p><a href = "https://github.com/SamuelGa25/Calendar" target="_blank"> 
                <img src={port3} alt= "" className="port-img2"/>
                </a>Work Day Scheduler</p>

                <p><a href = "https://github.com/SamuelGa25/Project1-To-do-List" target="_blank"> 
                <img src={port4} alt= "" className="port-img2"/>
                </a>To do LIST Project</p>



            </div>
             
        </div>
    )

}  

export default Portfolio