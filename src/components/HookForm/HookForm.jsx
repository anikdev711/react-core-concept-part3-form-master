import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoniSojoni');
    // const [email, handleEmailChange] = useInputState('rojoni@sojoni.com');
    // const [password, handlePasswordChange] = useInputState(123456);
    const emailState = useInputState('hellorojoni@klanto.com')
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(password);
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* array method  */}
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                {/* <br /> */}
                {/* <input value={email} onChange={handleEmailChange} type="email" name="email" id="" /> */}
                {/* <br /> */}
                {/* <input value={password} onChange={handlePasswordChange} type="password" name="password" /> */}
                {/* <br /> */}
                {/* object method */}
                <input type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;