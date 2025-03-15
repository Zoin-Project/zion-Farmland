import MainLayout from "../layouts/MainLayout";
// import BannerSlideComponent from "../components/BannerSilde";

const About = () => {
  return (
    <MainLayout>
      {/* <BannerSlideComponent/> */}
      <section className="p-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4">We are a company focused on delivering great products.</p>
      </section>
    </MainLayout>
  );
};
export default About;
