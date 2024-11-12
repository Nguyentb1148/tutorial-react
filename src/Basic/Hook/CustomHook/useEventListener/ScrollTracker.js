import React, { useState } from 'react';
import useEventListener from './useEventListener';

function ScrollTracker() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    // Track scroll events on the window
    useEventListener('scroll', handleScroll);

    return (
        <div style={{  height: '150vh', padding: '20px' }}>
            <h3 style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                zIndex: 1000
            }}>Scroll Position: {scrollPosition}px</h3>
        </div>
    );
}

export default ScrollTracker;
