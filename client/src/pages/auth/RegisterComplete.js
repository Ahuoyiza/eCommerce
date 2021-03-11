import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';  
import {toast} from 'react-toastify';


 const RegisterComplete = ({history}) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');


 useEffect(() => {
  setEmail(window.localStorage.getItem('emailForRegisteration'));

  // console.log(window.location.href);
  // console.log(window.localStorage.getItem('emailForRegisteration'));

 }, [])

 const handleSubmit = async (e) => {
     e.preventDefault();

     if(!email || !password){
       toast.error('Email and password is required');
       return;
     }
     if (password.length < 6){
       toast.error('Pasword must be at least 6 characters long');
       return;
     }

     try {
        const result =await auth.signInWithEmailLink(email, window.location.href);
        //console.log("RESULT", result);
        if(result.user.emailVerified){
          //delete user email in local storage
          window.localStorage.removeItem('emailForRegisteration');
          //user id token
          let user = auth.currentUser
          await user.updatePassword(password);
          const idTokenResult = await user.getIdTokenResult()
          //redux store
          console.log('user', user, 'idTokenResult', idTokenResult)
          //redirect
          history.push('/')
        }
     }catch (error) {
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
        onChange = {e => setPassword(e.target.value)}
        placeholder= "Enter your Password"
        autoFocus
        />
        <br />
        <button 
        type="submit"
        className="btn btn-raised"
        >
            Done
        </button>
 </form>

    return (
        <div className="container p-5">
            <div className="col-md-6 offset-md-3">
                <h4>Complete Registeration</h4>
                
                {completeRegisterationForm()}
            </div>
            
        </div>
    )
}

export default RegisterComplete;