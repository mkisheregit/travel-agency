import React from "react";
import {Link} from "react-router-dom";

 /* importing footer  and css of HomePage */
import "../CSS/HomePage.css";
import Footerr from "../Components/MainComponents/Footerr";


function HomePage({allTrips, handleTripDetails,UpdateAllTrips,DeleteTrip,tripdetails,interchange}) {

  return (
    <div className="home">
      
      <div className="input-box">
        <form>
          <img src="https://images.unsplash.com/photo-1597920467799-ec8bee99f6eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="not-showing" className="bus-image" />
          <div className="allinput-fields">
            {" "}<p>
            
              {/* ORIGIN input field */}
             <input 
             placeholder="from"
              type="text"
              className="origin_"
              onChange={(e) => {
                handleTripDetails(e);
              }}
              autoComplete="off"
              value={tripdetails.origin}
              name="origin"/>

               {/*If origin is empty then show error */}
              <div style= {tripdetails.origin?{display:"none"}:{color:"red"}}>{tripdetails.originError}</div>
             </p>

             {/*button which will interchange value between origin and destination */}
             <p><button type="button" className="interchange" onClick={()=>interchange()}><i class="fas fa-exchange-alt"></i></button></p>
           

             {/* DESTINATION input field */}
             <p> 
              <input 
              placeholder="to"
              type="text"
              className="destination_"
              onChange={(e) => {
                handleTripDetails(e);
              }}
              autoComplete="off"
              value={tripdetails.destination}
              name="destination"/>
              {/* show error if destination is empty */}
               <div style={tripdetails.destination?{display:"none"}:{color:"red"}}>{tripdetails.destinationError}</div>
             </p>
            

              {/* TRAVEL input field */}
             <p> <input 
              type="date"
              className="date_"
              onSelect={(e) => {
                handleTripDetails(e); 
              }}
              name="date"
              />
              {/* show error if date is not selected */}
              <div style={tripdetails.date?{display:"none"}:{color:"red"}}>{tripdetails.dateError}</div>
              </p> 
          </div>
          
          {/* update all trips array*/}
          <div className="addtrip-button">
            <button type="button" onClick={(event) => UpdateAllTrips(event)}>
            Add trip
            </button>
          </div>
        </form>
      </div>

       {/* show all trips  */}
        <div className="entries">
        <ul>
          <ul style={(allTrips.length>0?{display:"grid"}:{display:"none"})}>
          <li>No.</li>
          <li>From </li>
          <li>To</li>
          <li>Date</li>
          <li>Remove</li>
          </ul>
          {allTrips.map((obj, index) => {
            return (
              <div className="entries-items"> <li>{index+1}</li>
                <li >{obj.origin}</li>
                <li>{obj.destination}</li>
                <li>{obj.date}</li>
                <button type="button" onClick={()=>{DeleteTrip(obj.id);}}> remove </button>
              </div>
            );
          })}
        </ul>
        {/* Link to add passenger details to trips */}
        <div style={allTrips.length ? {textAlign:"center"}:{display:"none"}}className="go-to-link-container">
          <Link to="/complete-your-bookings" className="goto-link">complete bookings</Link>
        </div>
        </div>
        <div className="home-footer">
        <Footerr/>
        </div>
    </div>
  );
}

export default HomePage;

