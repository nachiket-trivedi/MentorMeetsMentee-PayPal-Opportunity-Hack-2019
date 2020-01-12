import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { connect } from 'react-redux';
import { login } from "../../redux-files/action";
import { setTimeout } from "timers";


const hostedAddress = "http://localhost";

let redirectVar = null;

const options = ["Mentee", "Mentor"];

class Login extends Component {
  
  constructor(props) {
    super(props);   
    this.state = {
      username: "",
      password: "",
      authFlag: false,
      role: ""
    };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.roleChangeHandler = this.roleChangeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  componentWillMount() {
    this.setState({
      authFlag: false
    });
  }
  usernameChangeHandler = e => {
    this.setState({
      username: e.target.value
    });
  };
  roleChangeHandler = value => {
    this.setState({
      role: value
    });
    this.role.value = { value };
  };

  passwordChangeHandler = e => {
    this.setState({
      password: e.target.value
    });
  };
  submitLogin = e => {
    var headers = new Headers();
    //prevent page from refresh
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role
    };
    axios.defaults.withCredentials = true;//very imp, sets credentials so that backend can load cookies
    axios.post(hostedAddress+":3001/login", data)
    .then(response => {   
        console.log("Status Code : ", response);
        if (response.status === 200 && response.data!="error") {
          console.log("welcome customer-");
          console.log(cookie.load('cookie'));
          localStorage.setItem('bearer-token',response.headers.authorization)
          this.setState({
            authFlag: true
          });
        } else if (response.status === 201 && response.data!="error") {
          console.log("welcome restaurant-");
          console.log(cookie.load('cookie'));
          this.setState({
            authFlag: true
          });
        }
        else if(response.data=="error")
        {
            alert("Invalid credentials");
            this.setState({
            authFlag: false
        });
        }
    })
    .catch (response => {
        alert("Invalid");
        this.setState({
          authFlag: false
        });
      }
    )
    // this.props.login(data); 
    // For Redux just uncomment this line, comment the above lines and the rest is as it is.
    // Refer the bhagwan chart for understanding the flow.

  };
  render() {
    if(!cookie.load('cookie')){
        redirectVar = <Redirect to= "/login"/>
    }
    else if(cookie.load('cookie')=='customer')
    {
        redirectVar = <Redirect to= "/home_cust"/>
    }
    else if(cookie.load('cookie')=='restaurant')
    {
        redirectVar = <Redirect to= "/home_rest"/>
    }
    return (
      <div>
        {redirectVar}
        <div class="container">
          <div class="login-form">
          <form onSubmit={this.submitLogin}>
            <div class="main-div">
              <div class="panel">
                <h2 >Year Up Login</h2>
                <p>Please enter your email and password</p>
              </div>
              <div class="form-group">
                <input
                  onChange={this.usernameChangeHandler}
                  type="email"
                  class="form-control"
                  name="username"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  onChange={this.passwordChangeHandler}
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="form-group">
                <Dropdown
                  ref={ref => (this.role = ref)}
                  options={options}
                  onChange={this.roleChangeHandler}
                  value={this.state.role}
                  placeholder="I'm a.."
                  required
                />
              </div>
              <div>
              <input
                  ref={ref => (this.submit = ref)}
                //   onChange={this.usernameChangeHandler}
                  type="submit"
                  class="btn btn-primary"
                  value="Login"
                />
                {/* <button onClick={this.submitLogin} class="btn btn-primary">
                  Login
                </button> */}
              </div>
              <br></br>
              <div>First time here? <a href="/signup">Sign up!</a></div>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
