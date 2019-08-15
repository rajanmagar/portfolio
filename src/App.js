import React, { Component } from 'react';
import 'wired-elements';

import Navbar from './components/Navbar';
import logo from './my-avatar.svg';
import './App.css';

class App extends Component {
  handleClick() {
    console.log('hahahaha')
  }
  render() {
    return (
      <main className="app">
        <aside>
          <Navbar />
        </aside>
        <section>
          <div className="bio">
            <wired-card elevation="3">
              <h3>Hi, I’m RAJAN.</h3>
              <strong>Nice to meet you.</strong>
              <p>I am a front end developer from punjab, india. I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!). You can write me back if you spot any and don't want to live anymore. I <code>design</code> and <code>code</code> beautifully simple things, and I love what I do.</p>
            </wired-card>
          </div>
          <div className="portfolio">
            <h1>Portfolio:</h1>
            <div className="github">
              <wired-button onClick={this.handleClick} >VIEW ON GITHUB</wired-button>
            </div>
            <div className="behance">
              <wired-button onClick={this.handleClick} >BEHANCE PORTFOLIO</wired-button>
            </div>
          </div>
          <h3>Things i am in love with</h3>
          <wired-listbox horizontal style={{ textAlign: 'left' }}>
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
        </section>
      </main>
    );
  }
}

export default App;
