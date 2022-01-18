export const getStatName = (stats, statName) => {
  const language = process.env.REACT_APP_LANGUAGE;

  // eslint-disable-next-line no-shadow
  const stat = stats.filter((stat) => stat.name === statName?.name);
  if (stat[0]) {
    return stat[0].names?.find((name) => name.language.name === language)?.name || '';
  }
  return '';
};
