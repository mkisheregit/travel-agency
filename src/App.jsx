import React,{useState} from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Navbar from "./Components/Navbar";
import  Mktravels from "./Components/Mktravels";
import  Bookings  from "./Components/Bookings";
import  Booktickets  from "./Components/Booktickets";
import  Contact from "./Components/Contact";
import Offers from "./Components/Additionalcomp/Offers";

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
function App() {

    const [data, setData] = useState([]);

    const [inputs, setinputs] = useState({
      origin: ""  ,               /* origin place */
      destination: ""  ,          /* desitination place */
      dated: "" ,                 /* date on which one want to go */
      originerror:"",
      destinationerror:"",
      dateerror:"",
    });
    
    const [moredata,setmoredata]=useState([]);
   const [moreinputs,setmoreinputs]=useState({
      travelmedium:"",
      name:"",
      age:"",
      mobno:"",
      email:"",
      gender:"",
      travelmediumerror:"",
       nameerror:"",
       ageerror:"",
      mobnoerror:"",
       emailerror:"",
       gendererror:"",
   });

  
  function handleinput(e) {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  function handlemoreinputs(e){
    setmoreinputs({...moreinputs,[e.target.name]:e.target.value});
  }


     function checkvalidity(){
       let travelmediumerror="";
       let nameerror="";
       let ageerror="";
       let mobnoerror="";
       let emailerror="";
       let gendererror="";

       if (!moreinputs.travelmedium) {
        travelmediumerror = "⚠ choose medium";
      }
      if (!moreinputs.name) {
        nameerror= "⚠ field can't be empty";
      }
      if(!moreinputs.age){
        ageerror="⚠ empty field";
      }
      if(!moreinputs.mobno){
        mobnoerror="⚠ empty field";
      }
      if(!moreinputs.email){
        emailerror="⚠ empty field";
      } 
      if(!moreinputs.gender){
        gendererror="⚠ choose gender";
      } 
      if(travelmediumerror||nameerror||ageerror||mobnoerror||emailerror||gendererror)
      {
        setmoreinputs({...moreinputs,travelmediumerror,nameerror,ageerror,mobnoerror,emailerror,gendererror});
        return false;
      }
      return true;
     }


   
    function updatedata(event){

       event.preventDefault();
       const is_valid = checkvalidity();

      if(is_valid){
       
       moredata.map((item,index)=>{ item['ind']=index});
       setmoredata([...moredata,{...moreinputs}]);
      
       setmoreinputs({ travelmedium:"",
       name:"",
       age:"",
       mobno:"",
       email:"",
       travelmediumerror:"",
        nameerror:"",
        ageerror:"",
        mobnoerror:"",
        emailerror:"",
      id:moredata.length-1});
      }
    }

    function interchange(){
      setinputs({...inputs,
        origin: inputs.destination,
        destination: inputs.origin})
    }
  

    const formisvalid = () => {
      let originerror = "";
      let destinationerror = "";
      let dateerror = "";

      if (!inputs.origin) {
        originerror = "⚠ field can't be empty";
      }
      if (!inputs.destination) {
        destinationerror = "⚠ field can't be empty";
      }
      if(!inputs.dated){
        dateerror="⚠ choose date";
      }
      
      if (originerror || destinationerror||dateerror) {
        setinputs({...inputs, originerror, destinationerror,dateerror });
        return false;
      }
      
      return true;
    };
    

    function Addtrips(event) {
   
     const isvalid = formisvalid();
     if(isvalid){
       console.log(inputs.dated);
      setData([...data,{...inputs}]);
      
      
       
      setinputs({ origin: "", destination: "", dated: "",originerror:"",destinationerror:""});
      console.log(inputs.dated);
      data.filter((item,index)=>{item["id"]=index;})
     }
     data.filter((item,index)=>{item["id"]=index})
    }
  

    function Removethisitem(objid){
      
      setData((prevItems) => {
        return prevItems.filter((item, index) => {
          return item.id !== objid;
        });
      });
      
    }


    function Deletefrommoredata(objid){
    setmoredata((prevmoredata)=>{
      return prevmoredata.filter((item,index)=>{
        return item.ind !== objid;
      });
    });
    }
     function Deletewholeentry(objid){
      setData((prevItems) => {
        return prevItems.filter((item, index) => {
          return item.id !== objid;
        });
      });

      setmoredata((prevmoredata)=>{
        return prevmoredata.filter((item,index)=>{
          return item.ind !== objid;
        });
      });
     }
   
    
    return (
        <div> 
            <Router>
                <Navbar/>
                <Switch>
                     <Route path="/" exact><Mktravels handleinput={handleinput} Addtrips={Addtrips} Removethisitem={Removethisitem} data={data} inputs={inputs} interchange={interchange}/></Route>

                    <Route path="/book-tickets"><Booktickets  handlemoreinputs={handlemoreinputs} updatedata={updatedata}    moreinputs={moreinputs}  Deletefrommoredata={Deletefrommoredata}  moredata={moredata} Removethisitem={Removethisitem} data={data} inputs={inputs} chechvalidity={checkvalidity}/></Route> 

                    <Route path="/your-bookings"><Bookings  data={data} moredata={moredata} Removethisitem={Removethisitem} Deletewholeentry={Deletewholeentry}/></Route> 

                    <Route path="/contact-us"><Contact/></Route>
                    <Route path="/travel-agency"><Mktravels/></Route>

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
                   
                </Switch>
            </Router>
        </div>
    )
}

export default App;
