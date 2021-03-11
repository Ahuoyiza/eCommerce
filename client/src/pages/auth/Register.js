import React, {useState} from 'react';
import {auth} from '../../firebase';  
import {toast} from 'react-toastify';


 const Register = () => {

 const [email, setEmail] = useState('');

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

 const registerForm = () => <form onSubmit= {handleSubmit} >
        <input 
        type="email" 
        className="form-control" 
        value={email} 
        onChange={e =>setEmail(e.target.value)}
        autoFocus
        autoComplete
        />
        <button 
        type="submit"
        className="btn btn-raised"
        >
            Register
        </button>
 </form>

    return (
        <div className="container p-5">
            <div className="col-md-6 offset-md-3">
                <h4>Register</h4>
                
                {registerForm()}
            </div>
            
        </div>
    )
}

export default Register;