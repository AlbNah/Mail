import React, { Component } from 'react'
import Card from '../UI/Card/Card'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import Text from '../Components/Text/Text'
import classes from '../UI/Global.module.css'
import Br from '../Components/Br/Br'

class Write extends Component {
  constructor(props) {
    super(props);
    this.fromRef = React.createRef('');
    this.toRef = React.createRef('');
    this.messageRef = React.createRef('')
    this.myStorage = window.localStorage;
  }

  sendMessage = () => {
    const user = JSON.parse(this.myStorage.getItem(this.toRef.current.value))
    const message = this.messageRef.current.value;
    const from = this.fromRef.current.value
    if(user && message && from) {
      const object = user;
      this.myStorage.removeItem(this.toRef.current.value);
      object.messages.push({from: from, message: message})
      this.myStorage.setItem(this.toRef.current.value, JSON.stringify(object));
      this.fromRef.current.value = '';
      this.toRef.current.value = '';
      this.messageRef.current.value = '';
    }
  }

  render() {
    return (
      <Card className={classes["main"]}>
      <Card className={classes["nested"]}>
            <Text className={classes["title"]}>Write Message</Text> <Br />
            <Input myRef={this.fromRef} className={classes["input"]} type="text" placeholder="From" /> <Br />
            <Input myRef={this.toRef} className={classes["input"]} type="text" placeholder="To" />  <Br />
            <Input myRef={this.messageRef} className={classes["input"]} type="text" placeholder="Example: Hi, how are you?"/> <Br />
            <Button onClick={this.sendMessage} className={classes[`button`]}>Send Message</Button>
      </Card>
      </Card>
    )
  }
}

export default Write