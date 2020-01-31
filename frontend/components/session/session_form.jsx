import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.resetState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetState() {
    if (this.props.formType === 'Log In') {
      this.state = {
        loginCredentials: '',
        password: ''
      };
    } else {
      this.state = {
        username: '',
        email: '',
        password: '',
        gender: '',
        birthday: Date.now
      }
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="session-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, clearErrors } = this.props;
    let emailInput,
      birthdayInput, 
      usernameInput, 
      genderInput,
      termsInput;

    if (formType === 'Sign Up') {
      emailInput = <div>
        <label>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"
          />
        </label>
      </div>

      usernameInput = <label>
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="username-input"
          placeholder="What should we call you?"
        />
      </label>

      birthdayInput = <div className="session-form-birthday">
        <label>Date of birth</label>
        <input type="date"
          onChange={this.update('birthday')}
          className="birthday-input"
        />
      </div>

      genderInput = <div className="session-form-gender">
        <label>
          <input type="radio" value="male" onChange={this.update('gender')} />
          Male
        </label>

        <label>
          <input type="radio" value="female" onChange={this.update('gender')} />
          Female
        </label>
        <label>
          <input type="radio" value="non-binary" onChange={this.update('gender')} />
          Non-binary
        </label>
      </div>
    } else {
      emailInput = <div>
        <label>
          <input type="text"
            value={ this.state.loginCredentials }
            onChange={this.update('loginCredentials')}
            className="login-input"
            placeholder={ formType === 'Log In' ? "Email address or username" : "Email" }
          />
        </label>
      </div>
    }

    return (
      <div className="session-form-container"> 
          <Link to="/"><img src={ blackLogo } /></Link>

          <form onSubmit={this.handleSubmit} className="session-form">
              {formType === 'Sign Up' ?<h3>Sign up with your email address</h3> : <h4>To continue, log in to Spotify.</h4>}

              {this.renderErrors()}

              <div className="session-form-input">
                <div className="session-form-text-input">
                  { emailInput }

                  <label>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="password-input"
                      placeholder="Password"
                    />
                  </label>

                  { usernameInput }

                  { birthdayInput }
                </div>

                { genderInput }

                { formType === 'Sign Up' ? <div className="g-recaptcha" data-sitekey="6LfJUNQUAAAAACm8--awNRrVvlQIeybq8VWQDKO9"></div> : ""}
                {/* 6LfWT9QUAAAAABaqSyzDj6zS5biO2U7SuEFk6omA */}
     
    
                <div className="session-form-submit">
                  <br />
                  <input className="session-submit-button" type="submit" value={formType} />
                </div>
              </div>
          </form>

          <div className="session-form-redirect-container">
              { formType === 'Sign Up' ? (<p>Already have an account? 
                <Link to='/login'
                  onClick={clearErrors} >
                  <span className="redirect-link">Log In</span>
                </Link>
              </p>) : (
                <div className="session-form-no-account">
                  <h3>Don't have an account?</h3>
                  <br />
                  <Link to='/signup'
                     onClick={clearErrors} >
                     <span className="redirect-link">{'Sign Up For Spotify'.toUpperCase()}</span>
                  </Link>
                </div>)
              }
          </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);