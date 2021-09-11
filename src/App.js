import React from 'react'
import Form from './Components/Form'

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
    <Form />
  )
}
