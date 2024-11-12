import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch main data
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();

                // Get form URL from the main data
                const formUrl = result.forms[0].url;
                const formResponse = await fetch(formUrl);
                if (!formResponse.ok) {
                    throw new Error(`Error: ${formResponse.statusText}`);
                }
                const formResult = await formResponse.json();

                // Add the form image URL to the main data
                result.imageUrl = formResult.sprites.front_default;
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, error, loading };
}

export default useFetch;
