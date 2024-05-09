import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    // State variables to store email and password
    const [email, setEmail] = useState('kush@gmail.com');
    const [password, setPassword] = useState('Test@123');
    const [autherName, setAutherName] = useState('');
    console.log('@@123')

    const navigate = useNavigate()
    // Function to handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    // Function to handle password input change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const init = async () => {
        try {
            // Define headers
            const headers = {
                // Add any headers you need here
                'Content-Type': 'application/json',
                // Example header:
            };

            // Make GET request with headers
            const response = await axios.get('http://localhost:3000/authors', { headers });

            if (response.status == 200) { setAutherName(response.data) }

            console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        init();
    }, [])

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can add code to handle login logic, such as sending data to a server or validating inputs
        console.log('Email:', email);
        console.log('Password:', password);


        try {
            // Make a POST request to your login API
            const headers = {
                // Add any headers you need here
                'Content-Type': 'application/json',
                // "Accept": '*/*'
            };

            const response = await axios.post('http://localhost:3000/login', {
                username: email,
                password: password
            });

            // Handle successful login response
            console.log('Login Res', response);
            if (response.status === 200) {
                // alert(response.data.message)
                setEmail('');
                setPassword('');
                // history.push('/Dashboard');
                navigate('/Dashboard', { state: { userId: response.data.user.id } });

            } else if (response.status === 201 || response.status === 202) {
                alert(response.data.message)
            }

            // Reset input fields

        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login for {autherName}</h2>
            <form onSubmit={handleSubmit} className='Login-style'>
                <div>
                    <label>Email : </label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label>Password : </label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
