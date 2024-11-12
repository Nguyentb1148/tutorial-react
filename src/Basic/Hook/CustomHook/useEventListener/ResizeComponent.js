import React, { useState } from 'react';
import useEventListener from './useEventListener';

function ResizeComponent() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Update state when window is resized
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    // Use the custom hook to listen for window resize events
    useEventListener('resize', handleResize);

    return (
        <div>
            <h3>Window Size</h3>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
        </div>
    );
}

export default ResizeComponent;
