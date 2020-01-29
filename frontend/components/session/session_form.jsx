import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === 'Log  In') {
      this.state = { username: '', password: '' };
    } else {
      this.state = {
        username: '',
        password: '',
        email: '',
        nickname: '',
        gender: '',
        birthday: Date.now
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
              {formType === 'Log In' ? <p>To continue, log in to Spotify.</p> : ''}
              {this.renderErrors()}
              <div className="login-form">
                <label>Username:
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                  </label>
                  <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
          </form>
      </div>
    );
  }
}

export default SessionForm;
