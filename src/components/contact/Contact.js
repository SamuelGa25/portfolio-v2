
import "./contact.css"
import github from "../../img/github.png"
import email from "../../img/email.webp"


// import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_n4e2qt4', 
                    'template_be1twa2', 
                    e.target, 
                    '387fvL9G_ixCvfUyL')

            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        
  };

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

          <form onSubmit ={sendEmail}>
            <div className="form"> 
              <input type ="text" name="user_name" className="input" placeholder="Enter Your Name"/>
              <input type ="Subject" name="user_subject" className="input" placeholder="Enter Your Subject"/>
              <input type ="Email" name="user_email" className="input" placeholder="Enter your Email"/>
              <textarea name= "message" className="msg" cols="30" rows="10" placeholder="Enter your message"></textarea>
              <input type= "submit" className="send" value="Submit"/>
            </div>
          </form>
         
        </div>
      </div> 
    </div>
  
  )
}
  
export default Contact;