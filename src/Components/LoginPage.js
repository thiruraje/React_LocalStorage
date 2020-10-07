import React, { Component } from 'react';
import history from './history';

class Login extends React.Component{
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            email: '',
            pass:''
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    // on form submit...
    handleLogin(e) {
        e.preventDefault()

        let newusersString = localStorage.getItem('document')
        let users=[];
        users=JSON.parse(newusersString);
        console.log(users["data"]);
        for (let index = 0; index < users["data"].length; index++) {
            console.log(users["data"][index]["email"]);

            if(users["data"][index]["email"] == this.state.email && users["data"][index]["pass"]==this.state.pass){
                history.push('/home')

                console.log("success");


            }


        } 
    }
    
    
    render(){
        return(
            <div>
                <div id="main-registration-container">
                    <div id="register">
                        <h3>Login Page</h3>
                        <form method="post"  name="userLoginForm" onSubmit={this.handleLogin}>
                        <label>Email ID:</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <div className="errorMsg"></div>
                        <label>Password</label>
                        <input type="password" name="pass"value={this.state.pass} onChange={this.handleChange}/>
                        <div className="errorMsg"></div>
                        <button  className="button" value="Login" variant="btn btn-success">Login</button>
                        <small>You don't have an Account?</small>
                        <button  className="button" value="Register" variant="btn btn-success" onClick={() => history.push('/')} >Create Account</button>  
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;