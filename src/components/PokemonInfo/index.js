import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Heading, HStack, Spinner, VStack, Box,
} from '@chakra-ui/react';
import { getPokemons } from '../../store/pokedex/selector';
import { getStatsRequest } from '../../store/pokedex/actions';

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const stats = useSelector(getStats);

  useEffect(() => {
    dispatch(getStatsRequest());
  });

  return (
    <VStack>
      <Box w="100%">
        <Heading>Stats</Heading>
        {}
      </Box>
    </VStack>
  );
};

export default PokemonInfo;
