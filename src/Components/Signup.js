import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
        repassword: ''
    });
    const {
        username, password, repassword
    } = data;

    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
        if (data.password === data.repassword) {
            console.log("valid Data");
        } else {
            console.log("Invalid Data");
        }

        axios.post('https://reactapi-f3d61-default-rtdb.firebaseio.com/register.json',data).then(()=> alert("Success Data saved"))
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <center><h2>Registration Form</h2></center>
                <input type="text" name="username" value={username} onChange={changehandler} placeholder="username" /> <br />
                <input type="password" name="password" value={password} onChange={changehandler} placeholder="password" /> <br />
                <input type="password" name="repassword" value={repassword} onChange={changehandler} placeholder="repassword" /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup
