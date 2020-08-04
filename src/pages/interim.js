import React, { Component } from 'react';
class Interim extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Congratulations</h1>
                    <p>You have successfully filled the Pension Transfer Form! <br/>
                        Please schedule an appointment for biometric capture</p>
</header>
                    <section class="container text-center">
                        <button id="prev" onclick="return app()" >Schedule Appointment</button><br/>
                            <button id="home" onclick="return validation()"> Go to Home Page</button>
</section>
            </div>
        )
    }
}
export default Interim;