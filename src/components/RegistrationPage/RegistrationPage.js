import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/group.png';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleRegistration = () =>{
        const newRegistration= {...loggedInUser,};
        fetch('http://localhost:5000/addRegistration',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newRegistration),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className="top-area">
        <img className="logo" src={logo} alt=""/>
         <div className='Register-area'> 
         <h4>Register as a volunteer</h4>
         <form className='login-box'>
             <input type="text" name="" placeholder="Full Name"/>
             <input type="email" name="" placeholder="User Name or Email"/>
             <input type="date" name="" placeholder="User Name or Email"/>
             <input type="text" name="" placeholder="Description"/>
             <input type="text" name="" placeholder="Organize books at the library"/>
             <button onClick={handleRegistration} className="registration-btn" >Registration</button>

        </form>
        
           
      </div>
     
       

     </div>
    );
};

export default RegistrationPage;