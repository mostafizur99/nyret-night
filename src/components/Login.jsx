import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            setUser(data);
        } catch {
            setError(true);
        }
        setLoading(false)
    };


    return (
        <div className='container mx-auto'>
            <form>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={!username || !password} onClick={handleLogin}>
                    {loading ? "Please wait" : "Login"}
                </button>
                <span
                    style={{ visibility: error ? "visible" : "hidden" }}
                    // className={` ${error ? 'visible' : 'hidden'} `}
                    data-testid="error-msg">Something went wrong!</span>
            </form>
        </div>
    )
}

export default Login