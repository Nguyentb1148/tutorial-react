import React from 'react';
import './CardStyle.css';
function Card({ loading, error, data }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Destructure the sprites object
    const {
        back_default,
        back_shiny,
        front_default,
        front_shiny,
    } = data.sprites || {};

    return (
        <div className="card">
            <h2 className="pokemon-name">{data.name}</h2>
            <p className="base-experience">Base Experience: {data.base_experience}</p>

            <h3>Sprites:</h3>
            <div className="sprites">
                {front_default && <img className="sprite-img" src={front_default} alt="Front Default" />}
                {front_shiny && <img className="sprite-img" src={front_shiny} alt="Front Shiny" />}
                {back_default && <img className="sprite-img" src={back_default} alt="Back Default" />}
                {back_shiny && <img className="sprite-img" src={back_shiny} alt="Back Shiny" />}
            </div>

            <h3>Abilities:</h3>
            <ul className="abilities-list">
                {data.abilities.map((ability) => (
                    <li key={ability.ability.name} className="ability-item">
                        {ability.ability.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;