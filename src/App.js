import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      names:[]
    }
   this.handleSubmit = this.handleSubmit.bind(this);  // oppure usare arrow function ----> handleSubmit
  }

handleSubmit(event){
  event.preventDefault();
  var name = this.refs.name.value;
  console.log(`hai scritto ${name}`);   //ora che houn dato aggiorno lo stato
  this.refs.name.value ="";             //pulisco
  let names = this.state.names.slice();
  names.push(name);
  this.setState({names:names})
}





 render(){
   let listaNomi = this.state.names.map((name,index) => {
     return(
          <li key = {index}> {name} </li>
         )
    });
   
   return(
<div>
  <h1>Foglio Iscrizioni</h1>
  <form onSubmit = {this.handleSubmit} >
    <input type ="text" placeholder="bho" ref="name" />
    <input type ="submit" value="invia" />
  </form>
  <div>
    <h2>Nomi già iscritti</h2>
   <ol>{listaNomi}</ol> 
  </div>
</div> 
  );
 }
}

export default App;
