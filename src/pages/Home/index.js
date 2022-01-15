import React, { useEffect, useState } from 'react';
import {
  VStack, Heading, Text, Container, Button, Box, Image, Link,
} from '@chakra-ui/react';
import PokemonInfo from 'components/PokemonInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsRequest } from 'store/pokedex/actions';
import { getPokemons, getError } from '../../store/pokedex/selector';
import './card.css';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const error = useSelector(getError);
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    dispatch(getPokemonsRequest({ page: selectedPage }));
  }, []);
  console.log(pokemons);

  return (
    <VStack>
      <Heading color="#000">POKEMONS</Heading>
      <div className="container">
        {pokemons.map((pokemon) => (
          <div key={pokemon?.id} className="card">
            <Box className="face front">
              <Heading size="small" textAlign="center">
                N#:
                {pokemon?.id}
              </Heading>
              <Heading className="namePokemon">{pokemon?.name}</Heading>
              <Image src={pokemon?.image} alt="pokemon" className="imagePokemon" />
            </Box>
            <Box className="face back">
              <Heading className="namePokemon">{pokemon?.name}</Heading>
              <Link href="PokemonInfo">Info</Link>
            </Box>
          </div>
        ))}
      </div>
      <Text>{error}</Text>
      <Button color="black" onClick={() => setSelectedPage(setSelectedPage + 1)}>Next</Button>
    </VStack>
  );
};

export default Home;
