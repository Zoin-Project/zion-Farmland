import HeroSection from "../components/HeroSections";
import Features from "../components/Feature";
import MainLayout from "../layouts/MainLayout";
import OrganicProducts from "../components/OrganicProducts";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Features />
      <OrganicProducts/>
    </MainLayout>
  );
};
export default Home;
