import ProjectSection from "~/components/Section/Project/ProjectSection";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import HeaderFour from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";

const ProjectPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <HeaderFour />
        <PageHeader title="Our Projects" />
        <ProjectSection />
        <CtaThree />
        <FooterTwo />
      </div>
    </div>
  );
};

export default ProjectPage;
