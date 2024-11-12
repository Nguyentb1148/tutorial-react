import React, { useState } from 'react';
import useEventListener from './useEventListener';

function MousePositionTracker() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const updateMousePosition = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Track mouse movement on the window
    useEventListener('mousemove', updateMousePosition);

    return (
        <div>
            <h3>Mouse Position</h3>
            <p>X: {mousePosition.x}</p>
            <p>Y: {mousePosition.y}</p>
        </div>
    );
}

export default MousePositionTracker;
