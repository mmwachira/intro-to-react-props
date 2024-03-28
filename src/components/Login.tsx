import React, {useState} from "react";

function Login() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();

        console.log({firstName,lastName});
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <fieldset>
                    <p>Login Details</p>
                    <input name='firstName' placeholder="First Name"></input><br/>
                    <input name='lastName' placeholder="Last Name"></input>
                </fieldset>


                <button type="submit">Login</button>
                
            </form>
            
        </div>
    );
}

export default Login;
