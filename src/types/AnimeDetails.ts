import Character from "./Character";
import Episode from "./Episode";

export default interface AnimeDetails {
  id: string;
  name: string;
  image: string;
  averageRating: number;
  userCount: number;
  favoritesCount: number;
  popularityRank: number;
  ageRating: string;
  ageRatingGuide: string;
  startDate: string;
  endDate: string;
  showType: string;
  description: string;
  characters: Array<Character>;
  episodes: Array<Episode>;
}
