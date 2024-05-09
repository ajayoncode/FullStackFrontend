import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Dashboard = (route) => {
    // State variables to store email and password

    const [autherName, setAutherName] = useState('');
    const [profileData, setProfileData] = useState(null)
    // Function to handle email input change
    const location = useLocation();
    console.log('@Routes ', JSON.stringify(location.state, null, 2))
    const userId = location.state.userId
    // Function to handle password input change

    const init = async () => {

        try {
            // Make a POST request to your login API
            const headers = {
                // Add any headers you need here
                'Content-Type': 'application/json',
                // "Accept": '*/*'
            };

            const response = await axios.post('http://localhost:3000/getProfile', {
                userId: userId,
            });

            // Handle successful login response
            console.log('Get Profile Res', response.data);
            if (response.status === 200) {
                // history.push('/Dashboard');
                setProfileData(response.data)
            } else if (response.status === 201 || response.status === 202) {
                alert(response.data.message)
            }

            // Reset input fields

        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
        }
    };
    useEffect(() => {
        init();
    }, [])

    if (profileData)
        return (
            <div className='dash-style'>
                <h2>Welecome {profileData?.name}!!</h2>
                <p> {profileData?.dob}</p>
                <p> {profileData?.technology}</p>
                <p> {profileData?.phonenumber}</p>

            </div>
        );

    return (
        <div className='dash-style'>
            <h2>Loading user data!!</h2>


        </div>
    );
}

export default Dashboard;
