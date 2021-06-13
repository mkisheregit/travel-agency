import React from "react";
import "./Mktravels.css";
import Footerr from "./Footerr";

import {Link} from "react-router-dom";
function Mktravels({data, handleinput,Addtrips,Removethisitem,inputs,interchange}) {

  return (
    <div className="home">
      <div className="input-box">
        <form>
          <img src="https://images.unsplash.com/photo-1597920467799-ec8bee99f6eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="not-showing" className="bus-image" />
          <div className="allinput-fields">
            {" "}<p>
            
            <input 
            placeholder="from"
              type="text"
              className="origin_"
              onChange={(e) => {
                handleinput(e);
              }}
              value={inputs.origin}
              name="origin"
            /><div style= {inputs.origin?{display:"none"}:{color:"red"}}>{inputs.originerror}</div>
            </p>
            <p><button type="button" className="interchange" onClick={()=>interchange()}><i class="fas fa-exchange-alt"></i></button></p>
           
           <p> 
            <input 
             placeholder="to"
              type="text"
              className="destination_"
              onChange={(e) => {
                handleinput(e);
              }}
              value={inputs.destination}
              name="destination"
            /> <div style={inputs.destination?{display:"none"}:{color:"red"}}>{inputs.destinationerror}</div>
            </p>
            
           <p> <input 
              type="date"
              className="date_"
              onSelect={(e) => {
                handleinput(e); 
              }}
              name="dated"
              /* value={inputs.dated}*/
              /><div style={inputs.dated?{display:"none"}:{color:"red"}}>{inputs.dateerror}</div>
            </p>
            
          </div>
          <div className="addtrip-button">
          <button type="button" onClick={(event) => Addtrips(event)}>
            Add trip
          </button>
          </div>
        </form>
        </div>
        <div className="entries">
        <ul>
          <ul style={(data.length>0?{display:"grid"}:{display:"none"})}>
          <li>No.</li>
          <li>From </li>
          <li>To</li>
          <li>Date</li>
          <li>Remove</li>
          </ul>
          {data.map((obj, index) => {
            return (
              <div className="entries-items"> <li>{index+1}</li>
                <li >{obj.origin}</li>
                <li>{obj.destination}</li>
                <li>{obj.dated}</li>
                <button type="button" onClick={()=>{Removethisitem(obj.id);}}> remove </button>
              </div>
            );
          })}
        </ul>
        <div style={data.length ? {textAlign:"center"}:{display:"none"}}className="go-to-link-container">
          <Link to="/book-tickets" className="goto-link">complete bookings</Link>
        </div>
        </div>
        <div className="home-footer">
        <Footerr/>
        </div>
    </div>
  );
}

export default Mktravels;

