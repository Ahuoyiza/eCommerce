import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';  
import {toast} from 'react-toastify';


 const RegisterComplete = ({history}) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 useState(() =>  {
    setEmail(window.localStorage.getItem("emailForRegisteration"))

 }, [])

 const handleSubmit = async (e) => {
     e.preventDefault();
     const  config = {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp: true
     };
     
     await auth.sendSignInLinkToEmail(email, config)
     toast.success(`Email is sent to ${email}. Click the link to complete your registeration.`);

     //save user email in local storage
     window.localStorage.setItem('emailForRegisteration', email)
     //clear state
     setEmail("");
 };

 const completeRegisterationForm = () => <form onSubmit= {handleSubmit} >
        <input 
        type="email" 
        className="form-control" 
        value={email} 
        disabled
        />

        <input 
        type="password" 
        className="form-control" 
        value={password} 
        onChange = {e  => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
        />
        <br/>
        <button 
        type="submit"
        className="btn btn-raised"
        >
            Complete Registeration
        </button>
 </form>

    return (
        <div className="container p-5">
            <div className="col-md-6 offset-md-3">
                <h4>Register Complete</h4>
                
                {completeRegisterationForm()}
            </div>
            
        </div>
    )
}

export default RegisterComplete;