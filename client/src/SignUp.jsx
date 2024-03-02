import React from 'react';

const SignUp = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        const email = e.target[0].value;
        const password = e.target[1].value;
        if(email === "" || password === "") {
            alert("Enter valid email or password");
        }

        try {
            // const response = await fetch('https://localhost:7083/Auth/SignUp');
            const response = await fetch('https://localhost:7083/Auth/SignUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log({response}) 
        } catch (error) {
            console.log({error})
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password"  />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
