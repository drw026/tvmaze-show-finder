import { ShowResponse, ShowsInGenre } from '../../types/Show';
import { NUMBER_OF_SHOWS_PER_GENRE } from '../../common/constants';

export function mapShows(data: ShowResponse[]): ShowsInGenre[] {
  const allGenres = data.reduce((allGenre, show) => {
    show.genres.forEach((genre) => allGenre.add(genre));
    return allGenre;
  }, new Set<string>());

  return [...allGenres]
    .map((genre) => {
      const shows = data
        .filter((show) => show.genres.includes(genre))
        .sort((a, b) => b.rating.average - a.rating.average)
        .map(({ id, name, image }) => {
          return {
            id,
            name: name || '',
            imageUrl: image?.original || image?.medium || '',
          };
        });

      return {
        genreName: genre,
        shows:
          shows.length > NUMBER_OF_SHOWS_PER_GENRE
            ? shows.splice(0, NUMBER_OF_SHOWS_PER_GENRE)
            : shows,
      };
    })
    .sort((a, b) => {
      // sort Genres alphabetically
      const stringA = a.genreName.toUpperCase();
      const stringB = b.genreName.toUpperCase();
      if (stringA < stringB) {
        return -1;
      }
      if (stringA > stringB) {
        return 1;
      }
      return 0;
    });
}
