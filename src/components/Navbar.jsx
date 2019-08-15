import React from 'react'
import PropTypes from 'prop-types'

import avatar from '../my-avatar.svg';

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__avatar">
                <img src={avatar} className="App-logo" alt="logo" />
                <h2>Designer, Front-end Developer & Artist</h2>
                <h3>rajanmagarrr@gmail.com</h3>
            </div>
            <div className="nav__links">
                <wired-button>
                    <a href="//github.com/rajanmagar" target="_blank">Github</a>
                </wired-button>
                <wired-button>
                    <a href="https://in.linkedin.com/in/rajanmagar" target="_blank">LinkedIn</a>
                </wired-button>
                <wired-button>
                    <a href="https://codepen.io/rajanmagar/" target="_blank">Codepen</a>
                </wired-button>
            </div>
            <p>Something great coming soon !!</p>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar

