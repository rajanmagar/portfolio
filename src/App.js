import React, { Component } from 'react';
import 'wired-elements';
import logo from './my-avatar.svg';
import './App.css';

class App extends Component {
  handleClick() {
    console.log('hahahaha')
  }
  render() {
    return (
      <div className="App">
        <div class="nav">
          <div class="nav-header">
            <div class="nav-title">
              WebDev
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <input type="checkbox" id="nav-check" />
          <div class="nav-links">
            <a href="//github.io/rajanmagar" target="_blank">Github</a>
            <a href="https://in.linkedin.com/in/rajanmagar" target="_blank">LinkedIn</a>
            <a href="https://codepen.io/rajanmagar/" target="_blank">Codepen</a>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Designer, Front-end Developer & Artist</h1>
        </header>
        <p className="App-intro">
        I <code>design</code> and <code>code</code> beautifully simple things, and I love what I do.
        </p>
        <wired-button onClick={this.handleClick} >VIEW ON GITHUB</wired-button>
        <wired-button onClick={this.handleClick} >BEHANCE PORTFOLIO</wired-button>
        <div className="bio">
          <wired-card elevation="3">
            <h3>Hi, I’m RAJAN. Nice to meet you.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae finibus sapien. Duis vitae tortor in urna tincidunt tristique sed eget felis. Proin mollis eleifend fermentum. Fusce sodales, nibh a vehicula placerat, diam nulla scelerisque libero, a condimentum risus mauris in turpis. Proin faucibus ligula id neque ullamcorper euismod. <code>rajanmagarrr@gmail.com</code></p>
          </wired-card>
        </div>
        <h3>Things i am in love with</h3>
          <wired-listbox style={{ textAlign: 'left' }}>
            <wired-item value="one" text="React"></wired-item>
            <wired-item value="two" text="Redux"></wired-item>
            <wired-item value="two" text="Vue"></wired-item>
            <wired-item value="two" text="Vuex"></wired-item>
            <wired-item value="two" text="Axios"></wired-item>
            <wired-item value="two" text="Material UI"></wired-item>
            <wired-item value="two" text="Ant Design"></wired-item>
            <wired-item value="two" text="Jest"></wired-item>
            <wired-item value="two" text="Express"></wired-item>
          </wired-listbox>
      </div>
    );
  }
}

export default App;
