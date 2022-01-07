import React, { useEffect, useState } from 'react';
import {
  VStack, Heading, Text, Container, Button, Box, Image,
} from '@chakra-ui/react';
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
    <VStack className="container">
      <Heading color="#000">POKEMONS</Heading>
      <Container>
        {pokemons.map((pokemon) => (
          <Box key={pokemon?.id} className="card">
            <Box className="face front">
              <Heading className="namePokemon">{pokemon?.name}</Heading>
              <Image src={pokemon?.image} alt="pokemon" className="imagePokemon" />
            </Box>
            <Box className="face back">
              <Heading className="namePokemon">{pokemon?.name}</Heading>
              cosas de pokemon
            </Box>
          </Box>
        ))}
      </Container>
      <Text>{error}</Text>
      <Button onClick={() => setSelectedPage(setSelectedPage + 1)}>Next</Button>
    </VStack>
  );
};

export default Home;
