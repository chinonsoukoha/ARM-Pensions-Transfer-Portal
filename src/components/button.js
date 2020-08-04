import React, { Component } from 'react';

class button extends React.Component {
    render() {
        const mystyle ={
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#a8005b",
            fontSize: "15px",
            fontWeight: "bold",
            display: "inline-block",
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
        
        };
    
        return (
            <div>
                <button style={mystyle}>Get Started<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        )
    }
}
export default button;