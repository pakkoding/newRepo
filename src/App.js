import React, { Component } from 'react';
import FormInput from './createForm'
import './style.css'
import CreatAccount from './create.account'
import ForgotPassword from './forgot.password'
import imgLogo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="containerCover">
        <img src={imgLogo} className="setLogo"/>
        <FormInput/>
        <CreatAccount/>
        <ForgotPassword/>
      </div>
    );
  }
}

export default App;
