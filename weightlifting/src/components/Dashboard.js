import React from 'react';
import {Link } from 'react-router-dom';

const Dashboard = () => {

    return(
        <div>
            <h1>Workouts!</h1>

            <button>
            <Link to="/workoutform">Create Workout</Link>
            </button>
        </div>
    )
}

export default Dashboard