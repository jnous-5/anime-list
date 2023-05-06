export interface Anime {
  favoritesCount: number;
  id: string;
  image: string;
  isFavorite: boolean;
  isStarred: boolean;
  rating: number;
  title: string;
}

export default interface AnimeListProps {
  data: Array<Anime>;
  hasMore?: boolean;
  onPaginate?: () => void;
  onToggleFavorite?: (id: string, active: boolean) => void;
  onToggleStarred?: (id: string, active: boolean) => void;
}
