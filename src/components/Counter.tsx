import React, {useState} from 'react';


    interface CounterProps {
        initialCount: number;
    };

    const Counter =  ({ initialCount }: CounterProps) => {
        const [number, setNumber] = useState(initialCount);

    const delayedCount = () => {
            setTimeout(() => setNumber((initialCount) => initialCount + 1), 2000);
    }

    return (
        <>
        <h1>The current number is {number}</h1>
        {[-1, +1, -50, +50, -100, +100].map((value) => 
            <button onClick={() =>setNumber(number + value)}>{value}</button>)}

        <button onClick={delayedCount}>Delayed+1</button>
        </>
    );
}



export default Counter;