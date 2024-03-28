import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';


function Form(){
// const [firstName, setFirstName] = React.useState("");
// const [lastName, setLastName] = useState("");


//     const submitForm = (event: React.FormEvent) => {
//         event.preventDefault();

//         console.log({firstName, lastName});
//     }

    return(
        <div>
            
            <Signup />
            <br/>
            <Login />
            
            {/* <form onSubmit={submitForm}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='firstName' placeholder='First Name'></input>
                        <input name='lastName' placeholder='Last Name'></input>
                    </label>
                    
                </fieldset>
                <button type='submit'>Submit</button>
                
        </form> */}
        </div>
        
    );
    

}

export default Form;
