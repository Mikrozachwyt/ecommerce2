import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username) {
            localStorage.setItem("user", username);
            onLogin(username);
        }
    };

    return (
        <div className="login">
            <h2>Zaloguj się</h2>
            <input
                type="text"
                placeholder="Wprowadź nazwę użytkownika"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Zaloguj</button>
        </div>
    );
};

export default Login;
