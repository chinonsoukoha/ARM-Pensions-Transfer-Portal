import React, { Component } from 'react';
class Pension extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PFA: '',
            pin: '',
            id: '',
            referral: '',
            policy: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        window.location.href = "/interim";
        event.preventDefault();
    }
    Verification() {
        if (window.confirm("Are you sure you want to exit? You may lose all your Progress.")) {
            window.location.href = "/"
        }
        else window.location.href = "/pension";
    }
    goBack() {

        if (window.confirm("Are you sure you want to go to the previous page? You may lose all your Progress.")){
        window.history.back();
        }
        else window.location.href = "/pension";
    }

    render() {
        return (
            <div>
            <header>
            <h1>PENSION TRANSFER FORM</h1>
            <img src="assets/images/profile2.png"/>
            <h3>Pension Information</h3>
            </header>
            <section id="info">
            <form onSubmit={this.handleSubmit}>
            <p>Current Pension Fund Administrator</p>
            <input required class="forms" type="text" name="PFA" list="PFA" placeholder="Enter your current PFA" /><br />
                <datalist id="PFA">
                    <option value="AIICO Pension Managers Limited">AIICO Pension Managers Limited</option>
                    <option value="APT Pension Fund Managers Limited">APT Pension Fund Managers Limited</option>
                    <option value="AXA Mansard Pension Limited">AXA Mansard Pension Limited</option>
                    <option value="CrusaderSterling Pensions Limited"> CrusaderSterling Pensions Limited</option>
                    <option value="FCMB Pensions Limited">FCMB Pensions Limited</option>
                            <option value="First Guarantee Pension Limited">First Guarantee Pension Limited</option>
                            <option value="IEI-Anchor Pension Managers Limited">IEI-Anchor Pension Managers Limited</option>
                            <option value="Investment One Pension Managers Limited">Investment One Pension Managers Limited</option>
                            <option value="Leadway Pensure PFA Limited">Leadway Pensure PFA Limited</option>
                            <option value="Nigerian University Pension Management Company (NUPEMCO)">Nigerian University Pension Management Company (NUPEMCO)</option>
                            <option value="NLPC Pension Fund Administrators Limited">NLPC Pension Fund Administrators Limited</option>
                            <option value="NPF Pensions Limited">NPF Pensions Limited</option>
                            <option value="OAK Pensions Limited">OAK Pensions Limited</option>
                            <option value="Pensions Alliance Limited">Pensions Alliance Limited</option>
                            <option value="Premium Pension Limited">Premium Pension Limited</option>
                            <option value="Radix Pension Managers Limited">Radix Pension Managers Limited</option>
                            <option value="Sigma Pensions Limited">Sigma Pensions Limited</option>
                            <option value="Stanbic IBTC Pension Managers Limited">Stanbic IBTC Pension Managers Limited</option>
                            <option value="Trustfund Pensions Limited">Trustfund Pensions Limited</option>
                            <option value="Veritas Glanvills Pensions Limited">Veritas Glanvills Pensions Limited</option>
                        </datalist>
                        <p>RSA Pin Number</p>
                        <input required class="forms" type="text" name="pin" placeholder="Enter your RSA Pin" />
                        <p>National ID Number</p>
                        <input required class="forms" type="text" pattern="\d*" name="id" placeholder="Enter your National ID Number" />
                        <p>Current Employer</p>
                        <input required class="forms" type="text" name="employer"placeholder="Current Employer" />
                        <p>Referral code</p>
                        <input required class="forms" type="text" pattern="\d*" name="referral" placeholder="Referral code" /><br />
                        <input required type="radio" id="policy" name="policy"/>
                        <label for="policy">I hereby consent to of the
                        personal data provided in this form by ARM Pension,<br />
                        for providing updates and marketing material including information relating to<br />
                        the Pension Transfer Window, in accordance with the Nigerian Data Protection <br />
                        Regulations (NDPR) 2019, as well as our data protection policy <a href="https://www.armpension.com/policies/privacy-policy/">here</a></label><br />
                        <input id="submit" type="submit" value="Submit" /><br />
                        <button id="prev" onClick={() => { this.goBack() }} > Previous </button><br />
                        <button id="home" onClick={() => { this.Verification() }} > Go to Home Page</button>   
</form>
</section>
            </div>
        )
    }
}
export default Pension;