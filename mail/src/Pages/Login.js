import React, { Component } from 'react'
import Wrapper from '../UI/Wrapper/Wrapper'
import Card from '../UI/Card/Card'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import Text from '../Components/Text/Text'
import classes from '../UI/Global.module.css'
import Br from '../Components/Br/Br'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main:
      <Card className={classes["main"]}>
      <Card className={classes["nested"]}>
            <Text className={classes["title"]}>Login</Text> <Br />
            <Input onChange={this.loginChange}  className={classes["input"]} type="text" placeholder="Login" /> <Br />
            <Input onChange={this.passwordChange} className={classes["input"]} type="password" placeholder="Password" />  <Br />
            <Button onClick={this.loginAcc} className={classes["button"]}>Login</Button>
      </Card>
      </Card> ,
      login: "",
      password: "",
    }
    this.myStorage = window.localStorage;
  }

  loginChange = (event) => {
    this.setState({
      login: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  logOut = () => {
    this.setState({
      main:
      <Card className={classes["main"]}>
      <Card className={classes["nested"]}>
            <Text className={classes["title"]}>Login</Text> <Br />
            <Input onChange={this.loginChange}  className={classes["input"]} type="text" placeholder="Login" /> <Br />
            <Input onChange={this.passwordChange} className={classes["input"]} type="password" placeholder="Password" />  <Br />
            <Button onClick={this.loginAcc} className={classes["button"]}>Login</Button>
      </Card>
      </Card>
    })
  }

  loginAcc = () => {
    const login = this.state.login;
    const password = this.state.password;
    if(JSON.parse(this.myStorage.getItem(login)).password === password) {
      const messages = JSON.parse(this.myStorage.getItem(login)).messages;
      this.setState({
        main:
          <Card className={classes["account"]}>
              <Card className={classes["account-div"]}>
                {login}
                <Button onClick={this.logOut} className={classes["logout"]}>Log out</Button>
              </Card>
              <Card className={classes["account-div"]}>
                {messages.map(el => {
                 return (
                 <Text key={Math.random()}>From: {el.from} | Message: {el.message} </Text>
                 )
                })}
              </Card>
          </Card>
      })
    }
  }
  


  render() {
    return (
      <Wrapper>
          {this.state.main}
      </Wrapper>
        
    )
  }
}

export default Login