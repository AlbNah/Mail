import React, { Component } from 'react'
import Wrapper from '../UI/Wrapper/Wrapper'
import Card from '../UI/Card/Card'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import Text from '../Components/Text/Text'
import classes from '../UI/Global.module.css'
import Br from '../Components/Br/Br'

class Login extends Component {
  render() {
    return (
        <Card className={classes["main"]}>
        <Card className={classes["nested"]}>
              <Text className={classes["title"]}>Login</Text> <Br />
              <Input className={classes["input"]} type="text" placeholder="Login" /> <Br />
              <Input className={classes["input"]} type="text" placeholder="Password" />  <Br />
            <Button className={classes["button"]}>Login</Button>
        </Card>
      </Card>
    )
  }
}

export default Login