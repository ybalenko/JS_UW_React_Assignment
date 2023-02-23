import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Pokemons() {
    const [pokeApiList, setProfile] = useState(undefined);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
            .then(response => response.json())
            .then(data => setProfile(data))
    }, [])

    return (
        <div>
            <RenderPokemonList pokeProfile={pokeApiList} />
        </div>
    )
}


function RenderPokemonList({ pokeProfile }) {
    const navigate = useNavigate();
    if (pokeProfile === undefined) {
        return <></>
    }
    const pokemons = pokeProfile.results.map((pokename, idx) => {
        return <div id={idx} key={idx} onClick={() => {
            navigate(`${pokename.name}`)
        }}>
            <div id='poke-name-on-main-page'>
                {pokename.name}
            </div>
        </div>
    }
    )
    return (
        <>
            {pokemons}
        </>
    );
};


RenderPokemonList.propTypes = {
    pokeProfile: PropTypes.object
}
