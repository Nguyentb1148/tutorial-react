import React, {useEffect, useState} from 'react';
import useEventListener from './useEventListener';

function CustomizableTimer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setCount((c) => c + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleKeyPress = (event) => {
        if (event.code === 'Space') {
            setIsRunning((prevIsRunning) => !prevIsRunning); // Toggle the timer
        } else if (event.key === 'r') {
            setCount(0); // Reset the timer
            setIsRunning(false); // Stop after resetting
        }
    };

    useEventListener('keydown', handleKeyPress);

    return (
        <div>
            <h3>Timer: {count} seconds</h3>
            <p>Press "space" to Start again to pause, and "r" to Reset</p>
        </div>
    );
}
export default CustomizableTimer;
