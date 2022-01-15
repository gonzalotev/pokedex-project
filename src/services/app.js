import http from 'services/http';

const appService = {
  getStats: async () => {
    const { data } = await http.get('https://pokeapi.co/api/v2/stat');
    const statsPromises = data.results.map((result) => http.get(result.url));
    // eslint-disable-next-line no-shadow
    return Promise.all(statsPromises).then((data) => data.map((stat) => stat.data));
  },
};

export default appService;
