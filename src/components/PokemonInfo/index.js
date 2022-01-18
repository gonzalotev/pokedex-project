import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Heading, HStack, Spinner, VStack, Box, Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router';
import { getPokemon } from '../../store/pokedex/selector';
import {getPokemonRequest} from '../../store/pokedex/actions';
import {getStatsRequest} from "../../store/app/actions";
import { getStats } from '../../store/app/selector';
import {getStatName} from 'utils/getStatName';

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const pokemon = useSelector(getPokemon);
  const stats = useSelector(getStats);

  useEffect(() => {
    dispatch(getStatsRequest());
    dispatch(getPokemonRequest(id));
  }, [id]);

  return (
    <VStack>
      <Box w="100%">
        <Heading>Stats</Heading>
        {pokemon.stats?.map((stat) =>  (
            <HStack>
              <Text>{pokemon?.name} {pokemon?.id}</Text>
              <Text fontSize="xl">{`${getStatName(stats, stat.stat)}:`}</Text>
              <Text fontSize="xl">{stat.base_stat}</Text>
            </HStack>
        ))}
      </Box>
    </VStack>
  );
};

export default PokemonInfo;
