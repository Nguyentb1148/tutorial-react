import React, { useState } from 'react';
import useEventListener from './useEventListener';

function EscapeKeyModal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    // Listen for keypresses on the entire document
    useEventListener('keydown', handleKeyPress);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <div style={{ border: '1px solid black', padding: '20px' }}>
                    <p>Press "Escape" to close this modal.</p>
                </div>
            )}
        </div>
    );
}

export default EscapeKeyModal;
