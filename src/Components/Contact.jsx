import React, { useState } from 'react';
import "./Contact.css";
import  { Link } from "react-router-dom";
function Contact() {
  const [allentries,setallentries]=useState({name:"",email:"",message:"",nameerror:"",emailerror:"",messageerror:""});


  const handlechange=(event)=>{
  setallentries({ ...allentries, [event.target.name]: event.target.value });
  }



  const submitform = (event) => {
      event.preventDefault();
    const isvalid = formisvalid();
    if (isvalid) {
      setallentries({name:"",email:"",message:"",nameerror:"",emailerror:"",messageerror:""});
     console.log("form is submitted");
    }
  };

  const formisvalid=()=>{
    let nameerror="";
    let emailerror="";
    let messageerror="";
    if(!allentries.name){
          nameerror="! name can't be empty";
    }
    if(!allentries.email){
      emailerror="! wrong email";
}
if(!allentries.message){
  messageerror="!message can't be empty";
}
if(emailerror||nameerror||messageerror){
  setallentries({...allentries,nameerror:nameerror,emailerror:emailerror,messageerror:messageerror});
  return false;
}
return true;
}



    return (<div className="contact">
               <div className="map-section">
                   <img src="./map-image.jpg" alt="map-image" />
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
                   <div class="icons">
                      <Link  className="link"to="/contact-us/facebook">  <i class="fab fa-facebook-square"></i></Link>
                      <Link  className="link"to="/contact-us/facebook"> <i class="fab fa-instagram"></i></Link>
                      <Link className="link" to="/contact-us/facebook">  <i class="fab fa-twitter"></i> </Link>
                      <Link className="link" to="/contact-us/facebook">   <i class="fab fa-linkedin"></i></Link>
                       </div>
                   </div>
                   <div className="ask-something">
                       <p>want to ask something ?</p>
                       <p>don't worry drop a message below</p>

                       <form onSubmit={(e)=>{submitform(e)}}>
                          <input type = "text" placeholder="..your name" value={allentries.name} name="name" onChange={(e)=>{handlechange(e)}} />
                          <div className="warning" style={allentries.name ?{display:"none"}:{color:"red"}}>{allentries.nameerror}</div>
                         <input type="email" placeholder="..mail id" value={allentries.email} name="email" onChange={(e)=>{handlechange(e)}} />
                         <div className="warning" style={allentries.email ?{display:"none"}:{color:"red"}}>{allentries.emailerror}</div>
                           <textarea  rows="6" placeholder="..drop your message here" value={allentries.message} onChange={(e)=>{handlechange(e)}} name="message" ></textarea >
                           <div className="warning" style={allentries.message ?{display:"none"}:{color:"red"}}>{allentries.messageerror}</div>
                            <button type="submit" className="submit-button"   >submit</button>
                           
                       </form>
                       <p style={{color:"white"}}>copyright © 2021</p>
                   </div>
                   
               </div>
    </div>);
       
}

export default Contact;
