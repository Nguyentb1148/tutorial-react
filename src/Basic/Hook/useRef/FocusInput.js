import React, { useRef } from 'react';

function FocusInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus(); // Accessing the input element directly
        console.log('input ref: ', inputRef)
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default FocusInput;
