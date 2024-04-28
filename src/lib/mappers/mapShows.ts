import { ShowResponse, ShowsInGenre } from '../../types/Show';

export function mapShows(data: ShowResponse[]): ShowsInGenre[] {
  const allGenres = data.reduce((allGenre, show) => {
    show.genres.forEach(genre => allGenre.add(genre));
    return allGenre;
  }, new Set<string>());

  return [...allGenres].map((genre) => {
    const shows = data
      .filter((show) => show.genres.includes(genre))
      .sort((a, b) => b.rating.average - a.rating.average)
      .map(({id, name, image}) => {
        return {
          id,
          name: name || '',
          imageUrl: image.original || image.medium || ''}
      })

    return {
      genreName: genre,
      shows: shows.length > 10 ? shows.splice(0, 10) : shows
    };
  }).sort((a, b) => {
    const stringA = a.genreName.toUpperCase();
    const stringB = b.genreName.toUpperCase();
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  })
}
