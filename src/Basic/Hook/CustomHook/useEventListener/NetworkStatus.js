import React, { useState } from 'react';
import useEventListener from './useEventListener';

function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEventListener('online', updateOnlineStatus);
    useEventListener('offline', updateOnlineStatus);

    return (
        <div>
            <h3>Network Status: {isOnline ? 'Online' : 'Offline'}</h3>
        </div>
    );
}

export default NetworkStatus;
