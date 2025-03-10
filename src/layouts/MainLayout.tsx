import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = { children: ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main className="flex-1">{children}</main>

    {/* Footer */}
    <Footer />
  </div>
  );
};
export default MainLayout;
