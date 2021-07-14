import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import  Navbar from "./Components/MainComponents/Navbar";

/*importing pages  */
import  HomePage from "./Pages/HomePage";
import  ViewBookingsPage  from "./Pages/ViewBookingsPage";
import  CompleteBooking  from "./Pages/CompleteBooking";
import  ContactPage from "./Pages/ContactPage";

/* Additional component like footer'link etc. which are currently emppty */

import  Offers from "./Components/Additionalcomp/Offers";
import America from './Components/Additionalcomp/America';
import  Blogs from "./Components/Additionalcomp/Blogs";
import Srilanka from './Components/Additionalcomp/Srilanka';
import Comoncome from './Components/Additionalcomp/Comoncome';
import Letcworld from './Components/Additionalcomp/Letcworld';
import UK from './Components/Additionalcomp/UK';
import UserAgree from './Components/Additionalcomp/UserAgree';
import Privacy from './Components/Additionalcomp/Privacy';
import Values from './Components/Additionalcomp/Values';
import Sitemap from './Components/Additionalcomp/Sitemap';
import India from './Components/Additionalcomp/India';
import Carrer from "./Components/Additionalcomp/Carrer";
import TandC from './Components/Additionalcomp/TandC';
import Gogoagone from './Components/Additionalcomp/Gogoagone';
import Faqs from './Components/Additionalcomp/Faqs';

const TRIP_DETAILS = {
  origin: ""  ,               /*  place of origin */
  destination: ""  ,          /* desitination place */
  date: "" ,                 /* date of travel */
  originError:"",           /*If origin input is empty ,show error */
  destinationError:"",       /*If destination input is empty ,show error */
  dateError:"",            /*If date input is empty ,show error */
};

const PASSENGER_DETAILS = {
  travelmedium:"",  /* medium of travel like bus ,train etc.*/
  name:"",
  age:"",
  mobno:"",
  email:"",
  gender:"",
  travelmediumError:"",   /*show error if any of input field of property is empty */
   nameError:"",
   ageError:"",
  mobnoError:"",
   emailError:"",
   genderError:"",
}

function App() {
     
  /* alltrips: array which has objects "tripdetails" as its elements  */
    const [allTrips, setAllTrips] = useState([]); 

   /*tripdetails: object and has property origin,destination and date */
    const [tripdetails, setTripDetails] = useState(TRIP_DETAILS);
    
    /*allPassengerDetails: array and has "passenger" as its elements */
    const [allPassengerDetails,setAllPassengerDetails]=useState([]);

    /* passenger:obect  has details of passenger like name ,age, mobNo etc.*/
   const [passenger,setPassenger]=useState(PASSENGER_DETAILS);

   /* update tripdetails   */
  function handleTripDetails(e) {
    setTripDetails({
      ...tripdetails,
      [e.target.name]: e.target.value
    });
  };

  function UpdateAllTrips(event) {
   
    const isvalid = formisvalid();
    /*if isvalid true then add tripdetails to alltrips */
    if(isvalid){
     setAllTrips([...allTrips,{...tripdetails}]);
     /*make input fields empty once tripdetails is added to alltrips array */
     setTripDetails(TRIP_DETAILS);
      /*Give every element of alltrips array an id  */
     allTrips.forEach((item,index)=>{item["id"]=index;})
    }
    
   }


    /*Checking form is valid i.e. all input fields of tripdetails are filled and if not then set the error messages 
     and return false */
     const formisvalid = () => {
      let originError = "";
      let destinationError = "";
      let dateError = "";

      if (!tripdetails.origin) {
        originError = "⚠ field can't be empty";
      }
      if (!tripdetails.destination) {
        destinationError = "⚠ field can't be empty";
      }
      if(!tripdetails.date){
        dateError="⚠ choose date";
      }
      
      if (originError || destinationError||dateError) {
        setTripDetails({...tripdetails, originError, destinationError,dateError });
        return false;
      }
      
      return true;
    };


    function DeleteTrip(objid){
      /*Remove selected trip with id = objid from allTrips array */
      setAllTrips((prevItems) => {
        return prevItems.filter((item, index) => {
          return item.id !== objid;
        });
      });
      
    }

  /* update passenger details  */
  function handlepassenger(e){
    setPassenger({...passenger,[e.target.name]:e.target.value});
  }


  /*add passenger to allpassengerdetails array  */
  function updateAllPassengerDetails(event){
    event.preventDefault();
    const is_valid = checkvalidity();
/*if is_valid true add passenger to allPassengerDetails array */
   if(is_valid){
    /*give every element of allPassengerDetails array an id  */
   allPassengerDetails.forEach((item,index)=>{ item['ind']=index});
    setAllPassengerDetails([...allPassengerDetails,{...passenger}]);

   /*make all inputs of passenger empty once it is added array */
    setPassenger(PASSENGER_DETAILS);
   }
 }

/*Check whether all inputs of passenger are filled and 
if not then set error messages and return false from this function */
     function checkvalidity(){
       let travelmediumError="";
       let nameError="";
       let ageError="";
       let mobnoError="";
       let emailError="";
       let genderError="";

       if (!passenger.travelmedium) {
        travelmediumError = "⚠ choose medium";
      }
      if (!passenger.name) {
        nameError= "⚠ field can't be empty";
      }
      if(!passenger.age){
        ageError="⚠ empty field";
      }
      if(!passenger.mobno){
        mobnoError="⚠ empty field";
      }
      if(!passenger.email){
        emailError="⚠ empty field";
      } 
      if(!passenger.gender){
        genderError="⚠ choose gender";
      } 
      if(travelmediumError||nameError||ageError||mobnoError||emailError||genderError)
      {
        setPassenger({...passenger,travelmediumError,nameError,ageError,mobnoError,emailError,genderError});
        return false;
      }
      return true;
     }

/*Delete element from allPassengerDetails array with id=objid */
function DeletePassenger(objid){
  setAllPassengerDetails((prevAllPassengerDetails)=>{
    return prevAllPassengerDetails.filter((item,index)=>{
      return item.ind !== objid;
    });
  });
  }



/* interchange origin and destination  */
    function interchange(){
      setTripDetails({...tripdetails,
        origin: tripdetails.destination,
        destination: tripdetails.origin})
    }
  


    /*delete whole travel details i.e. element from allPassengerDetails and
    allTrips with id = objid */
     function DeleteTripAndItsPassenger(objid){

      setAllTrips((prevItems) => {
        return prevItems.filter((item, index) => {
          return item.id !== objid;
        });
      });

      setAllPassengerDetails((prevAllPassengerDetails)=>{
        return prevAllPassengerDetails.filter((item,index)=>{
          return item.ind !== objid;
        });
      });
     }
   
    
    return (
        <div> 
            <Router>
                <Navbar/>
                <Switch>
                     <Route path="/" exact><HomePage handleTripDetails={handleTripDetails} UpdateAllTrips={UpdateAllTrips} DeleteTrip={DeleteTrip} allTrips={allTrips} tripdetails={tripdetails} interchange={interchange}/></Route>

                    <Route path="/complete-your-bookings"><CompleteBooking  handlepassenger={handlepassenger} updateAllPassengerDetails={updateAllPassengerDetails}    passenger={passenger}  DeletePassenger={DeletePassenger} allPassengerDetails={allPassengerDetails} DeleteTrip={DeleteTrip} allTrips={allTrips} tripdetails={tripdetails} chechvalidity={checkvalidity}/></Route> 

                    <Route path="/view-all-bookings"><ViewBookingsPage  allTrips={allTrips} allPassengerDetails={allPassengerDetails} DeleteTrip={DeleteTrip} DeleteTripAndItsPassenger={DeleteTripAndItsPassenger}/></Route> 

                    <Route path="/contact-us"><ContactPage/></Route>
                  

                   <Route path="/about-us/site-map"><Sitemap/></Route>
                   <Route path="/about-us/carrear"><Carrer/></Route>
                   <Route path="/about-us/values"><Values/></Route>
                   <Route path="/about-us/offers"><Offers/></Route>

                   <Route path="/info/terms"><TandC/></Route>
                   <Route path="/info/policies"><Privacy/></Route>
                   <Route path="/info/faq"><Faqs/></Route>
                   <Route path="/info/blog"><Blogs/></Route>
                   <Route path="/info/user-agreement"><UserAgree/></Route>

                   <Route path="/global-sites/india"><India/></Route>
                   <Route path="/global-sites/america"><America/></Route>
                   <Route path="/global-sites/uk"><UK/></Route>
                   <Route path="/global-sites/sri-lanka"><Srilanka/></Route>

                   <Route path="/partners/gogoa"><Gogoagone/></Route>
                   <Route path="/partners/comon"><Comoncome/></Route>
                   <Route path="/partners/letcworld"><Letcworld/></Route>
                   {/* redirect route to homo if path is not valid */}
                   <Route render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
