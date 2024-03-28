import React, {useState} from "react";

function Signup() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const [myForm, setForm] = useState({});

const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((previous) => ({
        ...previous,
        [event.target.name]: event.target.value,
    }));
};

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();

        console.log({myForm});
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <fieldset>
                    <p>Signup Details</p>
                    <input name='firstName' placeholder="First Name"
                    onChange={saveFields}></input><br/>
                    <input name='lastName' placeholder="Last Name"
                    onChange={saveFields}></input>
                </fieldset>


                <button type="submit">Signup</button>
                
            </form>
        </div>
    )

}


export default Signup;