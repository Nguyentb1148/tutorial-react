import React, { useState, useEffect } from 'react';

function ExampleEffectTriggered() {
    const [stateA, setStateA] = useState(0);
    const [stateB, setStateB] = useState(0);

    // useEffect(() => {
    //     console.log('Effect A triggered');
    //     setStateB(stateA + 1);  // Updates stateB, which is a dependency for the next useEffect
    // }, [stateA]);
    //
    // useEffect(() => {
    //     console.log('Effect B triggered');
    //     // This will run when stateB changes, causing an unintended loop if stateA is also updated here
    // }, [stateB]);

    // First useEffect runs when stateA changes
    useEffect(() => {
        console.log('Effect A triggered');
        setStateB(stateA + 1);  // Updates stateB based on stateA
    }, [stateA]);  // Only depends on stateA

    // Second useEffect runs when stateB changes
    useEffect(() => {
        console.log('Effect B triggered');
        // Runs independently of stateA changes
    }, [stateB]);  // Only depends on stateB


    return (
        <div>
            <p>stateA: {stateA}</p>
            <p>stateB: {stateB}</p>
            <button onClick={() => setStateA(stateA + 1)}>Increment stateA</button>
        </div>
    );
}

export default ExampleEffectTriggered