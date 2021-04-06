import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) { //seeminglly not functioning, line 41 call
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error=${i}`}>  
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demo() { 
    if (this.props.formType === 'login') { 
    return (
    <button className="demo-user-button" onClick={this.props.demoLogin}>Demo Login</button>
    )
  } }

  render() {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box"> 
          Defibase
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Email
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input" />
            </label>
            <br />
            <label>Password
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input" />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType}/>
          </div>
            {this.demo()}
        </form>
      </div>
    );
  }
}

export default SessionForm;