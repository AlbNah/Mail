import { Component } from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Wrapper from './UI/Wrapper/Wrapper'
import Card from './UI/Card/Card'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import Text from './Components/Text/Text'
import Br from './Components/Br/Br';
import List from './Components/List/List';
import Listitem from './Components/Listitem/Listitem';
import classes from './UI/Global.module.css'
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Write from './Pages/Write';

class App extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
      return(
        <Wrapper>
            <List className={classes["menu"]}>
              <NavLink className="menu-li" to="/"><Listitem  key="1"> Login </Listitem></NavLink>
              <NavLink className="menu-li" to="/registration"><Listitem key="2"> Register </Listitem></NavLink>
              <NavLink className="menu-li" to="/write"><Listitem  key="3"> Write Message </Listitem></NavLink>
            </List>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </Wrapper>
      )
  }
}


export default App;
