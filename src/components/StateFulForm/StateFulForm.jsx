import { useState } from "react";


const StateFulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setError('Please provide password with 6 or more digit');
        }
        else{
            setError('');
            console.log(name, email, password);
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    type="text" name="name" id="" placeholder="Your name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" placeholder="Email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" placeholder="Password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;