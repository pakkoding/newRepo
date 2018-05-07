import React from 'react';
import './style.css';

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
      }
      
  render() {
      let {username, password} = this.state

    return (
        <div>
                <div className="form-group">
                    <label for="exampleInputEmail1">E-mail address</label>
                    <input type="text" className="form-control formatInput textInput" placeholder="youremail@example.com"
                    onChange={(e)=>this.setState({username:e.target.value})}
                    />           
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1 ">Your Password...</label>
                    <input type="password" className="form-control textInput" placeholder="Password" 
                    onChange={(e)=>this.setState({password:e.target.value})}
                    />
                </div>
                <button className="btnSet" onClick={()=>(this.state.username=="example@appman.co.th" && this.state.password=="password"? alert("Login Successed") : alert("E-mail or Password is incorrect"))}>SIGN IN</button>
        
        </div>
    );
  }
}

export default FormInput
