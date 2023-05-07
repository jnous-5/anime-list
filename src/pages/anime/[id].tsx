import MainLayout from "@/layouts/MainLayout";
import AnimePage from "@/views/AnimePage";

/**
 * Anime page.
 *
 * @returns {JSX.Element}
 */
const Anime = (): JSX.Element => {
  return (
    <MainLayout>
      <AnimePage />
    </MainLayout>
  );
};

export default Anime;
