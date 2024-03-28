import React, {useState} from "react";

const Changer =  ({ car }: CarProps) => {
    const [model, setModel] = useState<string>(car)

return(
    <div>
        <p>The current car is a {model}</p>
        {["Nissan", "BMW", "Mercedes"].map((value) => 
        <button onClick={() => setModel(value)}>{value}</button>)}
    </div>
)

};

export default Changer;