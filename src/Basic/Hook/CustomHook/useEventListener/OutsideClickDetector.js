import React, { useState, useRef } from 'react';
import useEventListener from './useEventListener';

function OutsideClickDetector() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Listen for clicks anywhere in the document
    useEventListener('mousedown', handleOutsideClick, document);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <div ref={modalRef} style={{ border: '1px solid black', padding: '20px' }}>
                    <p>Click outside of this modal to close it.</p>
                </div>
            )}
        </div>
    );
}

export default OutsideClickDetector;
