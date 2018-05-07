import React, { Component } from 'react';
import './style.css';

class FormInput extends Component {
  render() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">E-mail address</label>
                    <input type="text" className="form-control formatInput" placeholder="youremail@example.com"/>           
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Your Password...</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary btnSet">SIGN IN</button>
                
            </form>
            <p className="test">dsffd</p>
        </div>
    );
  }
}

export default FormInput
