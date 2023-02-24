import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PokemonName() {
    const [pokeName, setPokeName] = useState(undefined);
    let { name } = useParams();


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(
                (data) => { setPokeName(data) },
                (error) => { console.log(error) })
    }, [])


    return (
        <div>
            <h1>Pokémon data</h1>
            <RenderPokemon pokeProfile={pokeName} />
            <span id='back-link'>
                <Link to="/">Back</Link></span>
        </div>
    )
}

function RenderPokemon({ pokeProfile }) {
    if (pokeProfile === undefined) {
        return <></>
    }
    return (
        <>
            <div className='container'>
                <h4>Pokémon name:</h4>
                <span id='pokemon-details' key='poke-name'>{pokeProfile.name}</span>
                <h4>Pokémon height:</h4>
                <span id='pokemon-details' key='poke-height'>{pokeProfile.height}</span>
                <img className='poke-image' src={`https://img.pokemondb.net/artwork/large/${pokeProfile.name}.jpg`} alt={pokeProfile.name} />
            </div>
        </>
    );
};


RenderPokemon.propTypes = {
    pokeProfile: PropTypes.object
}

PokemonName.propTypes = {
    name: PropTypes.string
}
