import React, { useEffect } from 'react';
import {
  VStack, Heading, Text, Container,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsRequest } from 'store/pokedex/actions';
import { getPokemons } from '../../store/pokedex/selector';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);

  useEffect(() => {
    dispatch(getPokemonsRequest());
  }, []);
  console.log(pokemons);

  return (
    <VStack>
      <Heading color="#000">POKEMONS</Heading>
      <Container>
        {pokemons.map((pokemon) => (
          <div>{pokemon?.image}</div>
        ))}
      </Container>
    </VStack>
  );
};

export default Home;
