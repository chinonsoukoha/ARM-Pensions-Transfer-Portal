import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
class Basic extends Component{
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            oname: '',
            dob: '',
            residential_no: '',
            street: '',
            town: '',
            country: '',
            state: '',
            city: '',
            lga: '',
            pobox: '',
            phone: '',
            email: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        window.location.href="/pension";
        event.preventDefault();
    }
    Verification(){
        if (window.confirm("Are you sure you want to exit? You may lose all your Progress.")) {
            window.location.href="/"
        }
        else window.location.href = "/basic";
    }

    render() {
        return(
            <div>
                <header>
                    <h1>PENSION TRANSFER FORM</h1>
                    <img src="assets/images/profile1.png"/><br/>
                    <h3>Personal Information</h3>
                </header>
                <section id="info">
                    <form name="myForm" onSubmit={this.handleSubmit}>
                        <p>First Name</p>
                        <input required class="forms" id="fname" name="fname" type="text" placeholder="Enter your first name"/>
                        <p>Last Name</p>
                        <input required class="forms" name="lname" type="text" placeholder="Enter your last name"/>
                        <p>Other Names</p>
                        <input required class="forms" name="oname" type="text" placeholder="Enter your other names"/>
                        <p>Date of Birth</p>
                        <input required class="forms" name="dob" type="date" placeholder="DD/MM/YYYY"/>
                        <p>Address</p>
                        <input required class="forms" name="residential_no" type="type" pattern="\d*" placeholder="Residential No"/><br/>
                        <input required class="forms" name="street"  type="text" placeholder="Street Name"/><br/>
                        <input required class="forms" name="town"  type="text" placeholder="Town"/><br/>
                        <input required class="forms" type="text" name="country" list="country" placeholder="Country"/><br/>
                        <datalist id="country">
                            <option class="forms" value="Nigeria">Nigeria</option>
                        </datalist>
                        <input class="forms" required type="text" name="state" list="state" placeholder="State" /><br/>
                        <datalist id="state">
                            <option value="Abuja FCT">Abuja FCT</option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nassarawa">Nassarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </datalist>
                        <input required name="city" class="forms" type="text" placeholder="City" /><br />
                        <input required name="lga" class="forms" type="text" placeholder="L.G.A" /><br />
                        <input required name="pobox" class="forms" type="text" pattern="\d*" placeholder="P.O. Box" />
                        <p>Mobile Phone</p>
                        <input required class="forms" name="phone" type="text" pattern="\d*" minLength="10" maxLength="11" placeholder="Enter your phone number" />
                        <p>Personal Email</p>
                        <input required class="forms" name="email" type="email" placeholder="Enter your email" /> <br/>
                        <input id="submit" value="Save & Continue" type="submit"/><br />
                        <input id="submit" value="Go to Home Page" type="button" onClick={ () => {this.Verification()}} /><br />
                    </form>
                </section>                                                   
            </div>
        )
    }
}
export default Basic;