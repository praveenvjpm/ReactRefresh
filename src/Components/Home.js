import React ,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

export const Home = () => {

    let history = useHistory();

    const [login,setLogin] = useState(false);
    if(login){
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <Header />
            <h3>This is Home</h3>
            <button onClick={()=>setLogin(true)} >Login</button>

            <button onClick={()=>history.push('/dashboard')} >Login History</button>
            <Footer />
        </div>
    )
}

