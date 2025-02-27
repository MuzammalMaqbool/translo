"use client";
import Link from "next/link";
import { useState } from "react";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        // Optionally, you can handle success message or redirection here
      } else {
        console.error("Failed to send email");
        // Handle error case
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <section className="contact-page padding">
      <div className="shape1 float-bob-y">
        <img src="/img/shape/contact-page-shape1.png" alt="" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/contact-page-shape2.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="contact-page__contact-info">
              <div className="sec-title-style3">
                <div className="sub-title">
                  <div className="icon">
                    <img src="/img/icon/title-marker-4.png" alt="" />
                  </div>
                  <h5>Get In Touch</h5>
                </div>
                <h2>Contact Us Today</h2>
              </div>

              <ul>
                <li>
                  <div className="icon-box">
                    <span className="icon-telephone-call"></span>
                  </div>

                  <div className="text-box">
                    <p>Call Us Toll Free</p>
                    <h2>
                      <Link href="tel:+14438240078">+1 443 824 0078</Link>
                    </h2>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-location"></span>
                  </div>

                  <div className="text-box">
                    <p>Office</p>
                    <h2>913 Southerly Road, Winthrop Apt 038, Towson MD</h2>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-email"></span>
                  </div>

                  <div className="text-box">
                    <p>Email Us</p>
                    <h2>
                      <Link href="mailto:info@theaksolutions.com">
                        info@theaksolutions.com
                      </Link>
                    </h2>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-time"></span>
                  </div>

                  <div className="text-box">
                    <p>Opening Time</p>
                    <h2>
                      Monday - Saturday <br />
                      10am : 08pm
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="contact-page__form-box">
              <div className="title">
                <h2>Feel free to write Us</h2>
              </div>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="number"
                        placeholder="Mobile"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="contact-page__input-box">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="contact-page__btn">
                      <button
                        type="submit"
                        className="thm-btn"
                        data-loading-text="Please wait..."
                      >
                        <span className="txt">Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="ajax-response mb-0"></p>

              <div className="contact-page__form-box-text">
                <p>
                  <span>Note: </span>Looking for reliable truck dispatching
                  services? Get in touch with us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
