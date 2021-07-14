import React from 'react';
import "../CSS/ViewBookingsPage.css";
import { Link } from 'react-router-dom';
function ViewBookingsPage({allTrips,allPassengerDetails,DeleteTrip,DeleteTripAndItsPassenger}) {
    return ( 
        <div className="bookings">
            <h1>Your all trips details will show here</h1>
         {/*Display evey info of each trip */}
            <div className="display-entry">
                 {  allTrips.length ?
                  allPassengerDetails.map((obj,index)=>{
                      return (
                          <div> 
                               <button type="button" onClick={()=>{DeleteTripAndItsPassenger(obj.ind);}}> X </button>
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
                  :
                  <div className="nothing-to-show">
                      <div><p>Oops! you have not added any trips.</p>
                  <Link to="/" className="goto-link">Add trips</Link>
                  </div>
                  </div>
                  }
           </div>
           </div>
    )
}
export default ViewBookingsPage;
