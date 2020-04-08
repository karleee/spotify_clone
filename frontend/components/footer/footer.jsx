import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { dev1: false };
    this.monitorClick();
    this.showContactInfo = this.showContactInfo.bind(this);
    this.monitorClick = this.monitorClick.bind(this);
  }

  // Shows dev's menu
  showContactInfo(e, devNum) {
    e.stopPropagation();
    const allKeys = Object.keys(this.state);
    const currentDev = `dev${devNum}`;
    const foundKey = allKeys.indexOf(currentDev);
    let currentDevBool;

    if (devNum === 1) {
      currentDevBool = this.state.dev1;
    } else if (devNum === 2) {
      currentDevBool = this.state.dev2;
    } else {
      currentDevBool = this.state.dev3;
    }

    const otherDevs = allKeys.slice(2, foundKey).concat(allKeys.slice(foundKey + 1, allKeys.length));

    this.setState({ [currentDev]: !currentDevBool });

    otherDevs.forEach(dev => {
      this.setState({ [dev]: false });
    });
  }

  // Monitors user click on page and determines whether or not to close dev menu
  monitorClick() {
    window.addEventListener('click', e => {
      if (e.target.parentElement.className !== 'dev-name-wrapper') {
        const allKeys = Object.keys(this.state);
        allKeys.forEach(dev => {
          this.setState({ [dev]: false });
        });
      }
    });
  }

  render() {
    return(
      <div className="footer-container">
        <div className="footer-links-container">
          <div className="logo-wrapper">
            <div className="footer image-wrapper"></div>
            <h2>Fikafy</h2>
          </div>

          <div className="about-wrapper">
            <h3>About</h3>
            <ul>
              <li><a href="">Github</a></li>
            </ul>
          </div>

          <div className="discover-wrapper">
            <h3>Discover</h3>
            <ul>
              <li><a href="">Morsel</a></li>
              <li><a href="">Nookbnb</a></li>
              <li><a href="">The Goodzilla</a></li>
              <li><a href="">Mini Pokedex</a></li>
            </ul>
          </div>

          <div className="dev-wrapper">
            <h3>Developer</h3>
            <ul>
              <li>
                <div className="dev-name-wrapper" onClick={e => this.showContactInfo(e, 1)}>
                  <p>Karen Lee</p>
                  <div className="dev-triangle-wrapper"></div>
                </div>

                {this.state.dev1 ? <div className="dev-dropdown-wrapper">
                  <ul>
                    <li><a href="https://github.com/karleee">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/karleee/">LinkedIn</a></li>
                    <li><a href="https://angel.co/u/karleee">Angel List</a></li>
                    <li><a href="http://karleee.com/">Portfolio</a></li>
                    <li><a href="mailto:karleee@protonmail.com">Email</a></li>
                  </ul>
                </div> : ''}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright-wrapper">
          <small>&copy; 2020 Fikafy</small>
        </div>
      </div>
    );
  }
};

export default Footer;