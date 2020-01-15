import React, { Component } from "react";

class RegisterLogin extends Component {
  state={
    email:"",
    password:"",
    error:[]
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="이메일 형식과 일치하지않습니다"
                  data-success="일치합니다"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="validate"
                  onChange={this.handleChange}
                  value = {this.state.password}
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error="비밀번호가 일치하지 않습니다"
                  data-success="일치합니다"
                />
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <button
                  className="btn waves-effect gray lighten-2"
                  type="submit"
                  name="action"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterLogin;