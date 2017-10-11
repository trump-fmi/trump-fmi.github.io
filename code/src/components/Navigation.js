import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class Navigation extends Component {

  state = {
    open: false
  }

  toggleMenu = (e) => {
    const {open} = this.state;
    e.preventDefault();
    this.setState({
      open: !open
    })
  }

  closeMenu = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const {open} = this.state;

    const DropDownClassName = open ? 'dropdown open' : 'dropdown';

    return (
      <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar-main">
              <ul className="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/guide" >Guides</NavLink></li>
                {/* <li className={DropDownClassName} tabIndex="0"
                  // onBlur={ e => {e.stopPropagation(); this.setState({open:false})} }
                  >
                  <NavLink className="dropdown-toggle" to="/guide" onClick={this.toggleMenu} >Guides <span className="caret" /></NavLink>
                  <ul className="dropdown-menu" aria-labelledby="themes">
                    <li><NavLink className="dropdown-toggle" to="/guide/getting-started" onClick={this.closeMenu}>Getting Started</NavLink></li>
                    <li className="divider" />
                    <li><NavLink className="dropdown-toggle" to="/guide/installation"  onClick={this.closeMenu}>Installation</NavLink></li>
                    <li><NavLink className='dropdown-toggle' to={`/guide/label-pipeline`}  onClick={this.closeMenu}>Label Pipeline</NavLink></li>
                    <li><NavLink className='dropdown-toggle' to={`/guide/tile-server-installation`}  onClick={this.closeMenu}>Tile-Server Installation</NavLink></li>
                    <li><NavLink className="dropdown-toggle" to="/guide/migration"  onClick={this.closeMenu}>Migration</NavLink></li>
                    <li><NavLink className="dropdown-toggle" to="/guide/client"  onClick={this.closeMenu}>Client</NavLink></li>
                  </ul>
                </li> */}
                <li><NavLink to="/configurator">Configurator</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
              </ul>
              {/* <ul className="nav navbar-nav navbar-right">
                <li><a href="http://builtwithbootstrap.com/" target="_blank">Built With Bootstrap</a></li>
                <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">WrapBootstrap</a></li>
              </ul> */}
            </div>
          </div>
        </div>
    );
  }

}

export default Navigation;
