import React, { useState } from 'react';
import "../CSS/CompleteBooking.css";
import { Link } from 'react-router-dom';

function CompleteBooking({ handlepassenger,passenger,tripdetails,updateAllPassengerDetails,allPassengerDetails,DeletePassenger,DeleteTrip,allTrips,mergerarrays, checkvalidity}) {

    const [checkclick,setcheckclick]=useState(false);//if checkclick is true, we can see input fields of passenger
    
    const [showinfo, setshowinfo]=useState(true);
    
 function handleClick(){ /* toggle between true and false */
         setcheckclick(!checkclick);
 }
 function handleshowinfo(){
     setshowinfo(!showinfo);
 }
 

    return (
        <div className="book-tickets">
            {/* button to trigger handleClick*/}
            <button onClick={()=>{handleClick()}} className="fill-details-button" >Add passenger details</button>
            {checkclick && < form className="fill-details-form" >

                  <div className="inputs-container">
                    <div>
                        {/* medium of travelling  */}
                        <p> Travel Medium</p> 
             
                        <select   className="travelmedium"   name="travelmedium" onChange={(e)=>{handlepassenger(e)}}>
                        <option value="none" disabled selected>choose from options</option>
                        <option value="taxi">taxi</option>
                        <option value="bus">bus</option>
                        <option value="train">train</option>
                        <option value="plane">plane</option>
                        </select>

                        <div className="input-Error" style={passenger.travelmedium ? {display:"none"}:{color:"red"}}>{passenger.travelmediumError}</div>
                       
                       {/* Gender */}
                        <p>Gender</p>

                        <select  className="gender" name="gender"  onChange={(e)=>{handlepassenger(e)}}>
                            <option value="none" disabled selected >choose</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <div className="input-Error" style={passenger.gender ? {display:"none"}:{color:"red"}}>{passenger.genderError}</div>
                        </div>
                     
                       <div > 
                         {/* passenger name */}
                            <p>
                           <input type="text" placeholder="name" name="name"  value={passenger.name} onChange={(e)=>{handlepassenger(e)}} autoComplete="off" />
                            {/* show error if input field is empty*/}
                           <div className="input-Error" style={passenger.name ? {display:"none"}:{color:"red"}}>{passenger.nameError}</div>
                           </p>
                           
                           {/* passenger age */}
                           <p>
                           <input type="number" placeholder="age"  name="age" value={passenger.age} onChange={(e)=>{handlepassenger(e)}} autoComplete="off"/>
                           <div className="input-Error" style={passenger.age?{display:"none"}:{color:"red"}}>{passenger.ageError}</div>
                           </p>

                           {/* passenger Mobile no */}
                           <p>
                           <input type="tel" placeholder="mob-no"  name="mobno" value={passenger.mobno} onChange={(e)=>{handlepassenger(e)}} autoComplete="off" />
                           <div className="input-Error" style={passenger.mobno?{display:"none"}:{color:"red"}}>{passenger.mobnoError}</div>
                           </p>
                           
                           {/* passenger email address */}
                           <p>
                           <input type="email" placeholder="email"  name="email" value={passenger.email} onChange={(e)=>{handlepassenger(e)}} autoComplete="off"/>
                           <div className="input-Error" style={passenger.email?{display:"none"}:{color:"red"}}>{passenger.emailError}</div>
                           </p>
                          
                        </div>


                    </div> {/* show button to add passenger details to trip  and we have passenger details for all trip then dont show button*/}
                        <div className="updatebutton" style={(allTrips.length <= allPassengerDetails.length ?{display:"none"}:{color:"black"})} >
                           <button  type="button" onClick={(e)=>{updateAllPassengerDetails(e)}}>update</button>
                        </div>
                          
                          {/* show message for which trip your are updating passenger details */}
                         <div style={(allTrips.length <= allPassengerDetails.length ?{display:"none"}:{color:"black"})} >
                           {showinfo && <p className="info" >update details for trip no. {allPassengerDetails.length +1} <button type="button"  onClick={handleshowinfo} > x </button></p>}
                        </div> 
                 </form> }

                    <div>
                        {/* show all updates of passenger details */}
                      <div className="display-entry">  
                     {  
                                  
                               allPassengerDetails.map((obj,index)=>{
                                   return (
                                       <div> 
                                            <button type="button" onClick={()=>{DeletePassenger(obj.ind);}}> X </button>
                                          <div className="entries-section">
                                           <p>Trip <p className="entry-num"> {index+1}</p></p>

                                           <div className="main-entry">
                                             <p>From <span className="e1">{allTrips[index].origin}</span></p>
                                            <p>To<span className="e1"> {allTrips[index].destination}</span></p>
                                           </div>

                                           <p className="normal-entry-heading">personal details</p>

                                           <div className="normal-entry">
                                                
                                             <p> on <div className="e1">{allTrips[index].date}</div></p>
                                             <p>transport type<div className="e1">{obj.travelmedium}</div></p>
                                             
                                             <p> name <div className="e1">{obj.name}</div></p>
                                             <p> age <div className="e1">{obj.age}</div></p>
                                             <p> gender <div className="e1">{obj.gender}</div></p>
                                             <p> mob no <div className="e1">{obj.mobno}</div></p>
                                             <p> email-id <div className="e1">{obj.email}</div></p>
                                           </div>
                                           </div>
                                          
                                        </div>
                                   );
                               })
                            }
                        </div>
                     { !allTrips.length && <div className="nothing-to-show">
                      <p>Oops! you have not added any trips.</p>
                  </div>}
                        <div  className="goto-link-container"><Link to="/" className="goto-link">Add more trips</Link></div>
                    </div>
        </div>
    )
}

export default CompleteBooking;
