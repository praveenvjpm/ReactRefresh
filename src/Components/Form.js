import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        userName: '',
        password: ''
    })
    const { userName, password } = data;

    const changeHandler = e => {
        console.log(e.target.value)
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <center>
                <h2>Login form</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" name="userName" value={userName} onChange={changeHandler} />
                    <br />
                    <input type="password" name="password" value={password} onChange={changeHandler} />
                    <br />
                    <input type="text" />
                    <input type="submit" />

                </form>
            </center>
        </div>
    )
}

export default Form
