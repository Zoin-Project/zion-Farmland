import HeroSection from "../components/HeroSections";
import Features from "../components/Feature";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Features />
    </MainLayout>
  );
};
export default Home;
