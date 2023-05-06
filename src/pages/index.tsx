import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/views/HomePage";

/**
 * Home page.
 *
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default Home;
