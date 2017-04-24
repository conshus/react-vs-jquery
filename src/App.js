import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      photoAdded: false
    };
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value});
  }

  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded})
  }

  remainingCharacters(){
    if (this.state.photoAdded) {
      return 117 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }

  overflowAlert(){
    if (this.remainingCharacters() < 0) {
      var beforeOverflowText;
      var overflowText;
      if (this.state.photoAdded) {
        beforeOverflowText = this.state.text.substring(107, 117);
        overflowText = this.state.text.substring(117);
      } else {
        beforeOverflowText = this.state.text.substring(130, 140);
        overflowText = this.state.text.substring(140);
      }
      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long: </strong>
          ...{ beforeOverflowText }
          <strong className="bg-danger">{ overflowText }</strong>
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <div className="well clearfix">
          { this.overflowAlert() }
          <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
          <br/>
          <span className="pull-left">{ this.remainingCharacters() }</span>
          <button className="btn btn-primary pull-right" disabled={this.remainingCharacters() === 140}>Tweet</button>
          <button className="btn btn-default pull-right" onClick={this.togglePhoto.bind(this)}>
            {this.state.photoAdded ? "✓ Photo Added" : "Add Photo"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
