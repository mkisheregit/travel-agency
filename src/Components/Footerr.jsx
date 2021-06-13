import React from 'react'
import {Link} from "react-router-dom";
import "./Footerr.css";
function Footerr() {
    return (
        <div className="footerr">
              <div className="about-us"><ul>
                   <h2>about us</h2>
                   
                      <Link className="link" to="/about-us/site-map"> <li> site map </li></Link>
                      <Link className="link" to="/about-us/offers"> <li> offers</li></Link>
                      <Link className="link" to="/about-us/carrear"> <li> carrer</li></Link>
                      <Link className="link" to="/about-us/values"> <li> values</li></Link>
                      <Link className="link" to="/contact-us"> <li>contact us</li></Link>
                   </ul>
                </div >
                <div className="info"><ul >
                    <h2>info</h2>
                    
                    <Link className="link" to="/info/terms"> <li>T&C</li></Link>
                    <Link className="link" to="/info/policies"> <li>privacy policies</li></Link>
                    <Link className="link" to="/info/faq"> <li>faqs</li></Link>
                    <Link className="link" to="/info/blog"> <li>blogs</li></Link>
                    <Link className="link"to="/info/user-agreement"> <li>user agreement</li></Link>
                    </ul>
                </div >
                <div className="global-sites"> <ul>
                    <h2>Global Sites</h2>
                   
                    <Link className="link" to="/global-sites/india"> <li>India </li></Link>
                    <Link className="link" to="/global-sites/america"> <li>america</li></Link>
                    <Link className="link" to="/global-sites/uk"> <li>UK</li></Link>
                    <Link className="link" to="/global-sites/sri-lanka"> <li>Sri Lanka</li></Link>
                    </ul>
                </div>
                <div className="partners"><ul>
                    <h2>Partners</h2>
                    
                    <Link className="link"to="/partners/gogoa"> <li>Go goa gone</li></Link>
                    <Link className="link"to="/partners/comon"> <li>com on come</li></Link>
                    <Link className="link"to="/partners/letcworld"> <li>let c world</li></Link>
                    </ul>
                </div>
                <div className="motive">
                <i class="fa fa-bus" aria-hidden="true"/>
                    <p>Mk travels gives service on land and off land. we have partners world wide. we believe if customers are remaining happy with our service we are growing. </p>
                  </div> 
                  <div className="madewithlove">
                      <p>Made with <div className="heart">❤</div> by MK</p>
                      </div>
        </div>
    )
}

export default Footerr;
