import React, { useState } from 'react';
import "./Booktickets.css";
import { Link } from 'react-router-dom';
function Booktickets({ handlemoreinputs,moreinputs,inputs,updatedata,moredata,Deletefrommoredata,Removethisitem,data,mergerarrays, checkvalidity}) {

    const [checkclick,setcheckclick]=useState(false);
    const [showinfo, setshowinfo]=useState(true);
    
 function handleClick(){
         setcheckclick(!checkclick);
 }
 function handleshowinfo(){
     setshowinfo(!showinfo);
 }
 

    return (
        <div className="book-tickets">
            <button onClick={()=>{handleClick()}} className="fill-details-button" >Add passenger details</button>
            {checkclick && < form className="fill-details-form" >
                  <div className="inputs-container">
                    <div>
                        <p> Travel Medium</p> 

                        <select   className="travelmedium"   name="travelmedium" onChange={(e)=>{handlemoreinputs(e)}}>
                            <option value="none" disabled selected>choose from options</option>
                        <option value="taxi">taxi</option>
                        <option value="bus">bus</option>
                        <option value="train">train</option>
                        <option value="plane">plane</option>
                        </select>

                        <div className="input-error" style={moreinputs.travelmedium ? {display:"none"}:{color:"red"}}>{moreinputs.travelmediumerror}</div>
                       
                        <p>Gender</p>

                        <select  className="gender" name="gender"  onChange={(e)=>{handlemoreinputs(e)}}>
                            <option value="none" disabled selected >choose</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <div className="input-error" style={moreinputs.gender ? {display:"none"}:{color:"red"}}>{moreinputs.gendererror}</div>
                        </div>
                     
                     <div >
                            <p>
                           <input type="text" placeholder="name" name="name"  value={moreinputs.name} onChange={(e)=>{handlemoreinputs(e)}} />
                           <div className="input-error" style={moreinputs.name ? {display:"none"}:{color:"red"}}>{moreinputs.nameerror}</div>
                           </p>
                           
                           <p>
                           <input type="number" placeholder="age"  name="age" value={moreinputs.age} onChange={(e)=>{handlemoreinputs(e)}}/>
                           <div className="input-error" style={moreinputs.age?{display:"none"}:{color:"red"}}>{moreinputs.ageerror}</div>
                           </p>

                           <p>
                           <input type="tel" placeholder="mob-no"  name="mobno" value={moreinputs.mobno} onChange={(e)=>{handlemoreinputs(e)}} />
                           <div className="input-error" style={moreinputs.mobno?{display:"none"}:{color:"red"}}>{moreinputs.mobnoerror}</div>
                           </p>

                           <p>
                           <input type="email" placeholder="email"  name="email" value={moreinputs.email} onChange={(e)=>{handlemoreinputs(e)}}/>
                           <div className="input-error" style={moreinputs.email?{display:"none"}:{color:"red"}}>{moreinputs.emailerror}</div>
                           </p>
                          
                        </div>
                    </div>
                        <div className="updatebutton" style={(data.length <= moredata.length ?{display:"none"}:{color:"black"})} >
                           <button  type="button" onClick={(e)=>{updatedata(e)}}>update</button>
                            </div>
                         <div style={(data.length <= moredata.length ?{display:"none"}:{color:"black"})} >
                           {showinfo && <p className="info" >update details for trip no. {moredata.length +1} <button type="button"  onClick={handleshowinfo} > x </button></p>}
                        </div> 
                 </form> }
                    <div>
                      <div className="display-entry">  
                     { 
                               moredata.map((obj,index)=>{
                                   return (
                                       <div> 
                                            <button type="button" onClick={()=>{Deletefrommoredata(obj.ind);}}> X </button>
                                          <div className="entries-section">
                                           <p>Trip <p className="entry-num"> {index+1}</p></p>

                                           <div className="main-entry">
                                             <p>From <span className="e1">{data[index].origin}</span></p>
                                            <p>To<span className="e1"> {data[index].destination}</span></p>
                                           </div>

                                           <p className="normal-entry-heading">personal details</p>

                                           <div className="normal-entry">
                                                
                                             <p> on <div className="e1">{data[index].dated}</div></p>
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
                     { !data.length && <div className="nothing-to-show">
                      <p>Oops! you have not added any trips.</p>
                  </div>}
                        <div  className="goto-link-container"><Link to="/" className="goto-link">Add more trips</Link></div>
                    </div>
        </div>
    )
}

export default Booktickets;
