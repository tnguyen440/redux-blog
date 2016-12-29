import React, { Component } from 'react';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
