import React from "react";
import DispatchingServiceForm from "./Form";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";
import Header from "~/components/Section/Common/Header";
import PageHeader from "~/components/Section/Common/PageHeader";

const CarrierSetupPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <Header />
        <PageHeader title="Carrier Setup" />
        <div
          style={{
            marginTop: "80px",
          }}
          className="container"
        >
          <div className="sec-title-two">
            <div className="sub-title">
              <h5>Carrier Setup</h5>
            </div>
            <h5>
              Fill out the form below to get started with our carrier setup
              process.
            </h5>
          </div>
          <DispatchingServiceForm />
        </div>
        <FooterTwo />
      </div>
    </div>
  );
};

export default CarrierSetupPage;
