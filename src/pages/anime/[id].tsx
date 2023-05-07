import MainLayout from "@/layouts/MainLayout";
import AnimeDetails from "@/types/AnimeDetails";
import AnimePage from "@/views/AnimePage";
import axios from "axios";
import { GetServerSideProps } from "next";

interface AnimeProps {
  data: AnimeDetails;
}

/**
 * Anime page.
 *
 * @param {AnimeProps} props
 * @returns {JSX.Element}
 */
const Anime = ({ data }: AnimeProps): JSX.Element => {
  return (
    <MainLayout>
      <AnimePage data={data} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id;

  let data: AnimeDetails;
  let characterIds: Array<string> = [];

  try {
    const anime = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/anime/${id}`);

    const characters = axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/anime/${id}/characters`,
      { params: { "page[limit]": 4 } }
    );

    const episodes = axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/anime/${id}/episodes`
    );

    const [animeRes, charactersRes, episodesRes] = await Promise.all([
      anime,
      characters,
      episodes,
    ]);

    characterIds = charactersRes.data.data.map((character: any) => {
      return character.id;
    });

    data = {
      id: animeRes.data.data.id,
      name: animeRes.data.data.attributes.canonicalTitle,
      image: animeRes.data.data.attributes.posterImage.large,
      averageRating: animeRes.data.data.attributes.averageRating,
      userCount: animeRes.data.data.attributes.userCount,
      favoritesCount: animeRes.data.data.attributes.favoritesCount,
      popularityRank: animeRes.data.data.attributes.popularityRank,
      ageRating: animeRes.data.data.attributes.ageRating,
      ageRatingGuide: animeRes.data.data.attributes.ageRatingGuide,
      startDate: animeRes.data.data.attributes.startDate,
      endDate: animeRes.data.data.attributes.endDate,
      showType: animeRes.data.data.attributes.showType,
      description: animeRes.data.data.attributes.description,
      characters: [],
      episodes: episodesRes.data.data.map((episode: any) => ({
        id: episode.id,
        airDate: episode.attributes.airdate,
        title: episode.attributes.canonicalTitle,
      })),
    };
  } catch (e) {
    return { notFound: true };
  }

  try {
    const characterPromises = characterIds.map((id: any) => {
      return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/characters/${id}`);
    });
    const characterRes = await Promise.all(characterPromises);

    data["characters"] = characterRes.map((characterRes) => ({
      id: characterRes.data.data.id,
      name: characterRes.data.data.attributes.canonicalName,
      image: characterRes.data.data.attributes.image.original,
    }));
  } catch (e) {
    // Do nothing.
  }

  return { props: { data } };
};

export default Anime;
