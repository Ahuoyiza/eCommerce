import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';  
import {toast} from 'react-toastify';


 const RegisterComplete = ({history}) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 useEffect(() =>  {
    setEmail(window.localStorage.getItem("emailForRegisteration"));


    //console.log(window.location.href);
    //console.log(window.localStorage.getItem("emailForRegisteration"));

 }, [])

 const handleSubmit = async (e) => {
     e.preventDefault();
     try{
        const result = await auth.signInWithEmailLink(email, window.location.href );

        //console.log(("RESULT", result))
        if(email.user.emailVerified) {
            //remove  user emial from localstorage

            //user id token

            //redux store

            //redirect
        }
     } catch (error){
        console.log(error);
        toast.error(error.message);
     }
     
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