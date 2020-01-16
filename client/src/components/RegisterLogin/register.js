import React, { Component } from "react";
import { registerUser } from '../../actions/user_actions'; 
import { connect } from "react-redux";

class register extends Component {
  state = {
    lastname: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: []
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  isFormValid = () => {
    let errors = [];
    let error;
    if(this.isFormEmpty(this.state)){
      error= { massage: "항목들을 모두 채워주세요"}
     this.setState({errors : errors.concat(error)});
    } else if(!this.isPasswordValid){
       error = { message: "비밀번호가 타당하지않습니다"}
       this.setState({ errors: errors.concat(error)});
    } else {
      return true
    } 
}
isFormEmpty = ({lastname, name, email, password, passwordConfirm}) => {
  return    (
      !lastname.length ||
      !name.length ||
      !email.length ||
      !password.length ||
      !passwordConfirm.length  
      )
}
isPasswordValid = ({ password, passwordConfirm}) => {
  if(password.length  < 6 || passwordConfirm.length < 6){
      return false;
  } else if ( password !== passwordConfirm){
      return false;
  } else{
      return true;
  }
}
displayErrors = (errors) =>{
  errors.map((error,i)=>
  <p key={i}>
      {error}
  </p>)
}

  submitForm = e => {
    e.preventDefault();
    
    let dataToSubmit={
        lastname: this.state.lastname,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.passwordConfirm,
        errors: []
    }
    console.log(dataToSubmit)
     if(this.isFormValid()){
         this.setState({
             errors:[]
         })
         this.props.dispatch(registerUser(dataToSubmit))
         .then(response => {
           if(response.payload.success){
             this.props.history.push('/login')
           } else {
             this.setState({
               errors: this.state.errors.concat('your attempt to send data to DB was failed')
             })
           }

         })
         .catch(err => {
           this.setState({
             errors: this.state.errors.concat(err)
           })
         })
        
     }
  };

  render() {
    return (
      <div className="container">
        <h2>Sign up</h2>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.lastname}
                />
                <label htmlFor="email">lastname</label>
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
                  type="text"
                  name="name"
                  id="name"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <label htmlFor="password">name</label>
                <span
                  className="helper-text"
                  data-error="비밀번호가 일치하지 않습니다"
                  data-success="일치합니다"
                />
              </div>
            </div>

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
                <label htmlFor="password">email</label>
                <span
                  className="helper-text"
                  data-error="비밀번호가 일치하지 않습니다"
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
                  value={this.state.password}
                />
                <label className="active" htmlFor="password">
                  password
                </label>
                <span
                  className="helper-text"
                  data-error="비밀번호가 일치하지 않습니다"
                  data-success="일치합니다"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.passwordConfirm}
                />
                <label className="active" htmlFor="passwordConfirm">
                  passwordConfirm
                </label>
                <span
                  className="helper-text"
                  data-error="비밀번호가 일치하지 않습니다"
                  data-success="일치합니다"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
              <div>{this.displayErrors(this.state.errors)}</div>
            )}

            <div className="row">
              <div className="col s6">
                <button
                  className="btn waves-effect gray lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Create an account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(register);
