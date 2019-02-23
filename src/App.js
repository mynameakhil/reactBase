import React, { Component } from 'react';
import Per from './Person/Person'
import './App.css';

class App extends Component {
  state={
    person:[
      {name:'joice',age:25},
      {name:'steev',age:24},
      {name:'akhil',age:26}
    ]

  }
   switchedHandler=(newNam)=>{
    this.setState({
      person:[
        {name: 'joice',age: 25},
        {name: newNam, age: 25},
        {name: 'joice', age: 25}
      ]
    })
  }
  changeEventIn=(event)=>{

this.setState({
  person: [
    {name: 'joice',age: 25},
    {name: event.target.value,age:29},
    {name: 'joice',age: 25}
  ]
})


  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };
    return (
      <div className="App">
       <h1>hello all</h1>
       <button style={style}onClick={()=>this.switchedHandler('babu')}>switched</button>
       < Per name = {this.state.person[0].name}
       age = {this.state.person[0].age}/>
       < Per name = {this.state.person[1].name}
       age = {this.state.person[1].age} changed={this.changeEventIn}> hobbie babu </Per>
       < Per click={this.switchedHandler.bind(this,'steev')} name = {this.state.person[2].name}
       age = {this.state.person[2].age} />
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'helloworld'));
  }
}

export default App;
