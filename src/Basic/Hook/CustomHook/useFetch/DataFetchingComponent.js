import React from 'react';
import useFetch from './useFetch';
import Card from "./CardPokemom";

function DataFetchingComponent() {
    const [count, setCount] = React.useState(1);
    const { data, error, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`);

    // Inline styles
    const sectionStyle = {
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const headerStyle = {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
    };

    const buttonContainerStyle = {
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 15px',
        fontSize: '1rem',
        cursor: 'pointer',
        margin: '0 10px',
        transition: 'background-color 0.3s ease',
    };

    const buttonDisabledStyle = {
        backgroundColor: '#ccc',
        cursor: 'not-allowed',
    };

    return (
        <section style={sectionStyle}>
            <h1 style={headerStyle}>useFetch Example</h1>

            <div style={buttonContainerStyle}>
                <button
                    style={{ ...buttonStyle, ...(count < 2 ? buttonDisabledStyle : {}) }}
                    disabled={count < 2}
                    onClick={() => setCount((c) => c - 1)}
                >
                    Prev
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => setCount((c) => c + 1)}
                >
                    Next
                </button>
            </div>

            <Card loading={loading} error={error} data={data} />
        </section>
    );
}

export default DataFetchingComponent;
