import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface MainLayoutProps {
  children?: React.ReactNode;
}

/**
 * Main layout.
 *
 * @param {MainLayoutProps} props
 * @returns {JSX.Element}
 */
const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <main className={`container mx-auto px-2 py-5 ${inter.className}`}>
      {children}
    </main>
  );
};

export default MainLayout;
