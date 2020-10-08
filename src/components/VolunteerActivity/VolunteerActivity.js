import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './VolunteerActivity.css';


const VolunteerActivity = ({task}) => {
    const history = useHistory()
    const handleTask = (taskType) => {
        history.push(`/task/${taskType}`);
    }
    return (
        <div className="col-md-3">
            <img style={{height:'250px'}} src={require(`../../images/${task.photo}`)} alt=""/>

            <Button className="task-btn" onClick={() => handleTask(task.taskType)} variant="warning">{task.name}</Button>
            
        </div>
    );
};

export default VolunteerActivity;