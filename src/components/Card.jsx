import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <div class="card" >
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
        </div>
        </div>
        </div>);
    }
}
 
export default Card;