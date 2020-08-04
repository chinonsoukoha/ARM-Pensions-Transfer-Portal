import React, { Component } from 'react';
class Home extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>SCHEDULE APPOINTMENT</h1>
                    <img src="profile3.png"/><br/>
                        <p id="warning">Date/Time picked should not be less<br/>
                            than two hours after current Date/Time
    </p>   
</header>
    <section id="info">
    <form action="homepage2.html">
                        <p>Preferred Biometric Validation</p>
                        <input type="text" name="bio" list="bio" placeholder="Biometric Validation" /><br />
                        <datalist id="bio">
                            <option value="fingerprint">fingerprint</option>
                        </datalist>
                        <label for="meeting-time">Choose a time for your appointment</label>
                        <input type="datetime-local" id="meeting-time " placeholder="dd/mm/yy"
                            name="meeting-time" value="2020-07-28T21:30"
                            min="2020-07-28T21:00" />
                        <input id="submit" type="submit" /><br />
                        <button id="home" onclick="return Validation3()"> Go to Home Page</button> 
</form>
</section>
            </div>
        )
    }
}
export default Home;