import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class Shelves extends Component {
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
        <div className="Shelves">
        <div id="shelfa">
        <button className= "ShelfButton">
         <h1> SHELF A</h1>
         </button>
       </div>
       <div id="shelfb">
        <button className="ShelfButton">
         <h1> SHELF B</h1>
         </button>
       </div>
       <div id="shelfc">
           <button className="ShelfButton">
         <h1>SHELF C </h1>
        </button>
       </div>
       <div id="shelfd">
         <button className="ShelfButton">
         <h1>SHELF D</h1>
         </button>
       </div>
     </div>
    )
    }
}
export default Shelves;