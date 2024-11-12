import { useEffect, useRef } from 'react';

function useEventListener(eventName, handler, element = window) {
    // Store the handler in a ref so that it doesn't change on each render
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        // Check if element supports addEventListener
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        // Create an event listener that calls the handler from the ref
        const eventListener = (event) => savedHandler.current(event);

        // Add event listener
        element.addEventListener(eventName, eventListener);

        // Cleanup on unmount
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]); // Re-run if eventName or element changes
}

export default useEventListener;
