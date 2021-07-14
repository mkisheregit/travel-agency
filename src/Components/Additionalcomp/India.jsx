import React from 'react';
import "../../CSS/Blankpages.css";
import { Link } from 'react-router-dom'
;
function India() {
    return (
            <div className="blankpage" >
              <p>Curretly empty</p>
           
              <div><Link to="/" className="goto-link">back to home</Link></div>
          </div>    
    );
}

export default India;
