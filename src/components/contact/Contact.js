
import "./contact.css"


import github from "../../img/github.png"

import email from "../../img/email.webp"

const Contact = () => {
  return (
    
    <div className="contact"> 

      <div className="contact-left"> 
        
        <div className="contact-backg"></div>
        <h1 className="contact-title">Contact Information:</h1> 
        <h3 className="contact-title2"> Lets work together! ;'D</h3>

        <div className="contact-info">

          <p><a href = "https://github.com/SamuelGa25" target="_blank"> 
          <img src={github} alt= "" className="contact-img2"/>  
          </a>Github: SamuelGa25</p>

          <p><a href ="mailto:samuelgarenas@gmail.com" target="_blank"> 
          <img src={email} alt= "" className="contact-img2"/>  
          </a>Send Email</p>

        </div>

      </div>
      
      <div className="contact-right">


        <div className = "contact-me">
          <h1 className = "headings">CONTACT ME</h1>

          <div className="form">

            <input type ="text" name="name" className="input" placeholder="Enter Your Name"/>

            <input type ="Email" name="email" className="input" placeholder="Enter your Email"/>

            <textarea name= "msg" className="msg" cols="30" rows="10" placeholder="Enter your message"></textarea>

            <input type= "submit" value="SEND" className= "send"/>

          </div>
        </div>


      </div> 
    </div>
  
  )
}
  
export default Contact;