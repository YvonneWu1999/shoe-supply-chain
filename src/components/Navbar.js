import React, { Component } from 'react'
import Identicon from 'identicon.js';
// import logo from '../logo.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light fixed-top  flex-md-nowrap p-0 shadow text-monospace" style={{ backgroundColor: '#e3f2fd' }}>

        <h1 className="text-white text-primary px-3 font-weight-bold " >Shoe Supply Chain</h1>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            {this.props.account
              ? <img
                className="ml-2"
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;