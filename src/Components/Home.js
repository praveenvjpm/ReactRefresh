import React ,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import { Redirect } from 'react-router'

export const Home = () => {

    const [login,setLogin] = useState(false);
    if(login){
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <Header />
            <h3>This is Home</h3>
            <button onClick={()=>setLogin(true)} >Login</button>
            <Footer />
        </div>
    )
}

