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
    this.messageRef = React.createRef('')
    this.toRef = React.createRef('')
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

  sendMessage = (login) => {
    const message = this.messageRef.current.value;
    const user = JSON.parse(this.myStorage.getItem(this.toRef.current.value)) ;
    if(user && message) {
      const object = user;
      this.myStorage.removeItem(this.toRef.current.value);
      object.messages.push({from: login, message: message})
      this.myStorage.setItem(this.toRef.current.value, JSON.stringify(object));
      this.toRef.current.value = '';
      this.messageRef.current.value = '';
    }
  }

  loginAcc = () => {
    const login = this.state.login;
    const password = this.state.password;
    if(this.myStorage.getItem(login)) {
      if(JSON.parse(this.myStorage.getItem(login)).password === password) {
        const messages = JSON.parse(this.myStorage.getItem(login)).messages;
        this.setState({
          main:
            <Card className={classes["account"]}>
                <Card className={classes["account-div"]}>
                  <Text>{login} </Text> <Br />
                  <Input myRef={this.toRef} className={classes["account-input"]} type="text" placeholder="To" /> <Br />
                  <Input myRef={this.messageRef} className={classes["account-input"]} type="text" placeholder="Example: Hi, how are you?" /> <Br />
                  <Button className={classes["button"]} onClick={() => this.sendMessage(login)}>Send</Button> <Br />
                  <Button onClick={this.logOut} className={classes["logout"]}>Log out</Button> 
                </Card>
                <Card className={classes["account-div"]}>
                  {messages.map(el => {
                   return (
                   <Text key={Math.random()}>From: {el.from} | Message: {el.message} </Text>
                   )
                  })}
                </Card>
            </Card>,
            login: '',
            password: ''
        })
      }
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