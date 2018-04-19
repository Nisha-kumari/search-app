import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        list: ""
      }
      this.updateStatus = this.updateStatus.bind(this); 
  }
   updateStatus(e) {
        this.setState({list: e.target.value})
      }

  render() {
    let languages = this.props.items,
      list = this.state.list.toLowerCase();

    if(languages.length > 0) {
      languages = languages.filter(function(l){
        return l.name.toLowerCase().match(list);
      });
    }

    return (
      <div className="App">
        <h1>search programming language</h1>
        <p className="App-intro">
          Search
        </p>
        <input type="text" value={this.state.list} onChange={this.updateStatus}/>
        <ul className="ulList">
         {
          languages.map((l) =>  <li key={l.name}>{l.name}</li> )
        }
        </ul>

      </div>
    );
  }
}

export default App;
