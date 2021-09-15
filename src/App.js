import React from 'react'
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import Signup from './Components/Signup'
import './App.css'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import { Home } from './Components/Home'
import Dashboard from './Components/Dashboard'
import about from './Components/about'


export default function App() {
  // const [user, setUser] = useState("");
  // const handler = (e) => { setUser(e.target.value) }
  // return (
  //   <div>
  //     <input type="text" onChange={handler} name="user" value={user} />
  //     {user}
  //   </div>
  // )

  // const [data, setData] = useState({
  //   userName: '',
  //   password: ''
  // })

  // const { userName, password } = data;

  // const onchange = (e) => {
  //   setData({ ...data, [e.target.name]: [e.target.value] })
  // }

  // const submitHandler = e => {
  //   e.preventDefault();
  //   console.log(data);
  // }

  return (
    // <Form />
    //<Signup />
    <BrowserRouter> 
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard/:name" exact component={Dashboard} />
      <Route path="/about" exact component={about} />
    </Switch>
    </BrowserRouter>
   

  )
}
