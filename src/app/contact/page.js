import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";
import HeaderFour from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";

const ContactPage = () => {
  return (
    <>
      <HeaderFour />
      <PageHeader title="Contact Us" />
      <ContactUsSection />
      <MapSection />
      <CtaThree />
      <FooterTwo />
    </>
  );
};

export default ContactPage;
