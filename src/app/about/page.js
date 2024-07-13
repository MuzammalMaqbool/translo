import BlogSection from "~/components/Section/About/BlogSection";
import BrandSection from "~/components/Section/About/BrandSection";
import FactSection from "~/components/Section/About/FactSection";
import ProjectSection from "~/components/Section/About/ProjectSection";
import ServiceSection from "~/components/Section/About/ServiceSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import AboutSection from "~/components/Section/About/AboutSection";
import Header from "~/components/Section/Common/Header";
import Team from "~/components/Section/Common/Team";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import MissionSection from "~/components/Section/About/Missions/Mission";
import VisionSection from "~/components/Section/About/Visions/Visions";
import Story from "~/components/Section/About/Story/Story";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";

const AboutPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <Header />
        <PageHeader title="About Us" />
        <AboutSection />
        <FactSection />
        <Story />
        <MissionSection />
        <VisionSection />
        <ServiceSection />
        {/* <ProjectSection /> */}
        {/* <Team /> */}
        {/* <BlogSection /> */}
        {/* <BrandSection /> */}
        <CtaThree />
        <FooterTwo />
      </div>
    </div>
  );
};

export default AboutPage;
