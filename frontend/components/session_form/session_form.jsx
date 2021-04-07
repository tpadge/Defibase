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

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) { 
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="form-errors">
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
      <main className="form-main">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box"> 
          <div className="form-label">Create your account or Sign in</div>   
          <div className="login-form">
            <br />
            <label ><div className="form-input-label">Email</div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input" />
            </label>
            <br />
            <label ><div className="form-input-label">Password</div>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input" />
            </label>
            <br />
            <button className="session-submit" type="submit">{this.props.formType}</button>
            <br />
            {this.demo()}
            {this.renderErrors()}
          </div>
    
        </form>
      </div>
      </main>
    );
  }
}

export default SessionForm;