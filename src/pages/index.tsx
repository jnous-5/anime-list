import MainLayout from "@/layouts/MainLayout";
import Homepage from "@/views/Homepage";

/**
 * Homepage component.
 *
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <MainLayout>
      <Homepage />
    </MainLayout>
  );
};

export default Home;
