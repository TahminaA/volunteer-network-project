import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../../images/volunteerBackground.jpg';
import logo from '../../images/group.png';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';
import './Home.css';


const volunteerTask=[
    {
        name:"Child Support",
        photo:'childSupport.png'
    },
    {
        name:"Refuge Shelter",
        photo:'refuseShelter.png'
    },
    {
        name:"Food Charity",
        photo:'foodCharity.png'
    },
    {
        name:"Host a clothing swap",
        photo:'clothSwap.png'
    },
    {
        name:"Host a river clean-up",
        photo:'riverClean.png'
    },
    {
        name:"Clean water for child",
        photo:'cleanWater.png'
    },
    {
        name:"Good education",
        photo:'goodEducation.png'
    },
    {
        name:"New books for children",
        photo:'newBooks.png'
    },

    {
        name:"Host a study group",
        photo:'studyGroup.png'
    },
    {
        name:"Build birdhouses",
        photo:'birdHouse.png'
    },
    {
        name:"Organize books",
        photo:'libraryBooks.png'
    },
    {
        name:"Giving a seminar",
        photo:'driveSafety.png'
    },
    {
        name:"Give free music lessons",
        photo:'musicLessons.png'
    },
    {
        name:"Teach people how to register",
        photo:'voteRegister.png'
    },
    {
        name:"Clean up your local park",
        photo:'clearnPark.png'
    },
    {
        name:"Given IT helps to local adults",
        photo:'ITHelp.png'
    },
    {
        name:"Foster a shelter animal",
        photo:'driveSafety.png'
    },
    {
        name:"Babysit during PTA meetings",
        photo:'babySit.png'
    },
    {
        name:"Collect stuffed animals",
        photo:'stuffedAnimals.png'
    },
    {
        name:"Collect School Supplies",
        photo:'schoolSuffiles.png'
    },
    
];


const Home = () => {
     
    return (
        
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})` }} className="header">
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
                       <Button variant="primary">Register</Button>
                    </li>
                    <li>
                      <Button variant="dark">Admin</Button>
                     
                    </li>
                </ul>
            </nav>
            <div className="header-text">
               <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
               <input type="text"  placeholder="Search"></input>
               <Button variant="primary">Register</Button>
            </div>
             <div className="activity-task row">
               {
                 volunteerTask.map(task =><VolunteerActivity key={task.taskType} task={task}></VolunteerActivity>)
                }
             </div>
           
         </div>
      
    );
};

export default Home;