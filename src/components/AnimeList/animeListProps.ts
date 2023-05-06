export interface Anime {
  id: string;
  image: string;
  title: string;
  rating: number;
  favoritesCount: number;
}

export default interface AnimeListProps {
  data: Array<Anime>;
}
