import React, { useState } from 'react';
import useThrottle from './useThrottle';

function ThrottleExample() {
    const [text, setText] = useState('');
    const throttledText = useThrottle(text, 1000); // Throttle updates to 1 second

    return (
        <div>
            <h3>Throttle Example</h3>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type here..."
            />
            <p>useState text: {text}</p>
            <p>Throttled Text: {throttledText}</p>
        </div>
    );
}

export default ThrottleExample;
