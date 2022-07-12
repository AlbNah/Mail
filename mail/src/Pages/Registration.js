import React, { Component } from 'react'
import Wrapper from '../UI/Wrapper/Wrapper'
import Card from '../UI/Card/Card'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import Text from '../Components/Text/Text'
import classes from '../UI/Global.module.css'
import Br from '../Components/Br/Br'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.logRex = React.createRef('');
        this.passRex = React.createRef('');
        this.myStorage = window.localStorage;
    }

    createUser = () => {
        if(this.logRex.current.value.length > 3 && this.passRex.current.value.length > 3) {
            const login = this.logRex.current.value
            let object = {
                password: this.passRex.current.value,
                messages: []
            }
            this.myStorage.setItem(login, JSON.stringify(object))
        }
    }
    
  render() {
    return (
        <Wrapper>
            <Card className={classes["main"]}>
                <Card className={classes["nested"]}>
                    <Text className={classes["title"]}>Register</Text> <Br />
                    <Input myRef={this.logRex} className={classes["input"]} type="text" placeholder="Login" />  <Br />
                    <Input myRef={this.passRex} className={classes["input"]} type="password" placeholder="Password" /> <Br />
                    <Button onClick={this.createUser} className={classes["button"]}>Register</Button>
                </Card>
            </Card>
        </Wrapper>
    )
  }
}

export default Registration