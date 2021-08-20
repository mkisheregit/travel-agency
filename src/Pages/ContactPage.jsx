import React, { useState } from 'react';
import "../CSS/ContactPage.css";
import  { Link } from "react-router-dom";
function ContactPage() {
  const [allentries,setallentries]=useState({name:"",email:"",message:"",nameError:"",emailError:"",messageError:""});


  const handlechange=(event)=>{
  setallentries({ ...allentries, [event.target.name]: event.target.value });
  }



  const submitform = (event) => {
      event.preventDefault();
    const isvalid = formisvalid();
    if (isvalid) {
      setallentries({name:"",email:"",message:"",nameError:"",emailError:"",messageError:""});
     console.log("form is submitted");
    }
  };

  const formisvalid=()=>{
    let nameError="";
    let emailError="";
    let messageError="";
    if(!allentries.name){
          nameError="! name can't be empty";
    }
    if(!allentries.email){
      emailError="! wrong email";
}
if(!allentries.message){
  messageError="!message can't be empty";
}
if(emailError||nameError||messageError){
  setallentries({...allentries,nameError:nameError,emailError:emailError,messageError:messageError});
  return false;
}
return true;
}



    return (<div className="contact">
               <div className="map-section">
                   <img src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="map" />
                   <div className="heading">
                   <h1>Contact us</h1>
                   </div>
               </div>
              <div className="offices">
                  <div className="head-offices">
                      <h1>Head offices</h1><ul><li>
                    <h2>Mumbai</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                   <li>
                    <h2>Bangalore</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                   <li>
                    <h2>Greater Noida</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                </ul></div>
                  <div className="other-offices">
                      <h1>Other offices</h1><ul>
                 <li>
                    <h2>New Delhi</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                   <li>
                    <h2>Lucknow</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                   <li>
                    <h2>Bhuvneshwar</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                   <li>
                    <h2>Chennai</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quasi cupiditate esse sit? Cumque.</p></li>
                 </ul></div>
              </div> 
               <div className="footer-section">
                   <div className="social-media">
                   <p>social media</p>
                   <div className="icons">
                      <Link  className="link"to="/contact-us/facebook">  <i className="fab fa-facebook-square"></i></Link>
                      <Link  className="link"to="/contact-us/facebook"> <i className="fab fa-instagram"></i></Link>
                      <Link className="link" to="/contact-us/facebook">  <i className="fab fa-twitter"></i> </Link>
                      <Link className="link" to="/contact-us/facebook">   <i className="fab fa-linkedin"></i></Link>
                       </div>
                   </div>
                   <div className="ask-something">
                       <p>want to ask something ?</p>
                       <p>don't worry drop a message below</p>

                       <form onSubmit={(e)=>{submitform(e)}}>
                          <input type = "text" placeholder="..your name" value={allentries.name} name="name" onChange={(e)=>{handlechange(e)}} />
                          <div className="warning" style={allentries.name ?{display:"none"}:{color:"red"}}>{allentries.nameError}</div>
                         <input type="email" placeholder="..mail id" value={allentries.email} name="email" onChange={(e)=>{handlechange(e)}} />
                         <div className="warning" style={allentries.email ?{display:"none"}:{color:"red"}}>{allentries.emailError}</div>
                           <textarea  rows="6" placeholder="..drop your message here" value={allentries.message} onChange={(e)=>{handlechange(e)}} name="message" ></textarea >
                           <div className="warning" style={allentries.message ?{display:"none"}:{color:"red"}}>{allentries.messageError}</div>
                            <button type="submit" className="submit-button"   >submit</button>
                           
                       </form>
                       <p style={{color:"white"}}>copyright © 2021</p>
                   </div>
                   
               </div>
    </div>);
       
}

export default ContactPage;
