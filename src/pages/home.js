import React from 'react';
import {Link} from 'react-router-dom'
class Home extends React.Component{
    render() {
       return(
           <div> 
               <h1>PENSION TRANSFER WINDOW</h1>
               <section class="pattern">
                   <div class="geeks">
                       <img id="logo" src="assets/images/sitting 3.png" />
                       <img id="logo2" src="assets/images/text.png" />
                       <Link to="/basic">Get Started <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                   </div>
               </section>
               <img id="back" src="assets/images/Rectangle38.png" />
               <hr />
               <section id="sec2">
                   <h2>All It Takes is<br />
        Just Three Simple Steps</h2>
                   <img src="assets/images/clarity_form-line.png" />
                   <p>Complete the Transfer Form</p>
                   <img src="assets/images/appointment.png" />
                   <p>Schedule and attend appointment<br />
        for Biometric capture</p>
                   <img src="assets/images/success.png" />
                   <p>Successful Transfer!</p>
               </section>
           </div>
       ) 
    }
}
export default Home;