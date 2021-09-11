import React, { useState } from 'react'
import Arr from './Arr'
import Filter from './Filter'

export default function App() {
  // const [user, setUser] = useState("");
  // const handler = (e) => { setUser(e.target.value) }
  // return (
  //   <div>
  //     <input type="text" onChange={handler} name="user" value={user} />
  //     {user}
  //   </div>
  // )

  const [data, setData] = useState({
    userName: '',
    password: ''
  })

  const { userName, password } = data;

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="userName" value={userName} onChange={onchange} />
        <input type="password" name="password" value={password} onChange={onchange} />
        <input type="submit" />
      </form>

      <Arr />
      <Filter />
    </div>
  )
}
