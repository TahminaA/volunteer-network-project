import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/group.png';
import './EventTasks.css';

const EventTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
     <div className="header">
        <nav className="nav">
            <ul>
               <li>
                  <img className="logo" src={logo} alt=""/>
                    
               </li>
               <li>
                        <Link to="/home">Home</Link>
                </li>

                <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events">Event</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      {loggedInUser.name}
                    </li>
                
            </ul>
        </nav>
            
    </div>
    );
};

export default EventTasks;