

import React, { Component } from 'react';
import './Contadorpessoas.css';
 
class Contadorpessoas extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      numero : 0
    };
 
    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);
  }
  
  somar(){
    this.setState({
        numero: +1
  })
}

  subtrair(){
      this.setState({
          numero: -1
  })
}
  
  render(){
    return (
    <div>
        <center>
            <p>
                Contador de pessoas
                </p>
                <h1>{this.state.numero}</h1>
                <button onClick={this.somar}>+</button>
                <button onClick={this.subtrair}>-</button>
                </center>
                </div>
    );
    }
}


 
export default Contadorpessoas;