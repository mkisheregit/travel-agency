import React from 'react';
import "../../CSS/Blankpages.css";
import { Link } from 'react-router-dom'
;
function Gogoagone() {
    return (
            <div className="blankpage" >
              <p>currently Empty</p>
               <div><Link to="/" className="goto-link">back to home</Link></div>
          </div>    
    );
}

export default Gogoagone;
