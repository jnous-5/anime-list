import Episode from "@/types/Episode";

interface EpisodeWithMeta extends Episode {
  isWatched: boolean;
}

export default interface EpisodeListProps {
  data: Array<EpisodeWithMeta>;
  onToggleWatched?: (id: string, value: boolean) => void;
}
