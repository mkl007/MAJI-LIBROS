import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Character {
    id: number;
    name: string;
    image: string;
}

interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string | null;
    };
    results: Character[];
}

const CharacterList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                ////////////////////////////
                const response1 = await axios.get('https://rickandmortyapi.com/api/character');
                console.log(response1)
                // In this example the response1 const gets all the information as the backend sends. 
                // We are not filtering neither mapping (map) the results. Basically, when fetching the data
                // we only specify the types for the "data" and inside of "data" information.
                
                ////////////////////////// 
                const response = await axios.get<ApiResponse>('https://rickandmortyapi.com/api/character');
                const characterData = response.data.results.map(character => ({ // here we're extracting the data.results
                    // of our Backend api
                    id: character.id,
                    name: character.name,
                    image: character.image,
                }));
                setCharacters(characterData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching characters');
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {characters.map(character => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}
        </div>
    );
};

export default CharacterList;