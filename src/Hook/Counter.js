import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);  // Initial state is 0

    const increment = () => {
        setCount(count + 1);  // Update the state when the button is clicked
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
