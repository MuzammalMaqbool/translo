"use client";
import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function FaqSection() {
  const faqData = [
    {
      id: 1,
      question: "What is the process of working with you?",
      answer:
        "We have a simple process. First, we will have a consultation to understand your needs. Then, we will provide you with a quote. Once you approve the quote, we will start working on your project.",
    },
    {
      id: 2,
      question: "How do I get started with The AK Solutions?",
      answer:
        "To get started, you can contact us through our website or directly via our contact details. We will guide you through the onboarding process, including understanding your specific needs and setting up your account with us.",
    },
    {
      id: 3,
      question: "What are the payment terms for your services?",
      answer:
        "Payment terms are outlined in the service agreement or contract. Typically, payments are due as per the agreed schedule. Failure to pay on time may result in a suspension of services.",
    },
    {
      id: 4,
      question: "Do you have a 24/7 customer support team?",
      answer:
        "Yes, we have a dedicated 24/7 customer support team who is ready to help you with any questions or concerns you may have. They will be available to assist you 24 hours a day, 7 days a week.",
    },
    {
      id: 5,
      question: "Do you offer services for specific types of equipment?",
      answer:
        "Yes, we provide dispatching services for various types of equipment, including Dry Van, Reefer, Flatbed/Step-deck, Power Only, and Box Truck/Hot Shot. We tailor our services to meet the specific needs of your equipment and operations.",
    },
  ];
  return (
    <section className="faq-one faq-one--two padding">
      <div className="big-title">
        <h2>faq</h2>
      </div>
      <div
        className="faq-one__bg"
        style={{
          backgroundImage: "url(/img/resource/faq-v2-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          {/* <!-- Start Faq One Faq--> */}
          <div className="col-xl-6">
            <div className="faq-one__faq">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>FAQ?</h5>
                </div>
                <h2>Frequently Asked Questions</h2>
              </div>

              <Accordion defaultActiveKey="0" className="accordion-two">
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <h2>
                        <span>{faq.id}.</span> {faq.question}
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <span>Answer:</span>
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          {/* <!-- End Faq One Faq--> */}

          {/* <!-- Start Faq One Contact Info--> */}
          <div className="col-xl-6">
            <div
              className="faq-one__contact-info wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="title-box">
                <p>Let’s Talk</p>
                <h3>You need any help? get free consultation</h3>
              </div>

              <div className="faq-one__contact-info-number">
                <div className="icon">
                  <span className="icon-call"></span>
                </div>

                <div className="text">
                  <p>Have Any Questions</p>
                  <h3>
                    <Link href="tel:+14438240078">+1 443 824 0078</Link>
                  </h3>
                </div>
              </div>

              <div className="btn-box">
                <Link className="thm-btn" href="contact">
                  <span className="txt">Contact Us</span>
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- End Faq One Contact Info--> */}
        </div>
      </div>
    </section>
  );
}
