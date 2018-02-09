import React, { Component } from 'react';
import logo from "./logo.png";
// import axios from 'axios';


class Header extends Component {
    constructor(){
        super();
        this.state = {
            //change things here
        };
    }












// test() {
//     axios.get('/api/test').then(response => {
//         console.log(response.data);
//     });
// }

render(){

    return(
        <div className="Header">
        <img src={logo} id="logo"/>
        <h1 id="title">SHELFIE</h1>
        </div>
    
    )
}
}
export default Header;