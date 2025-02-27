/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { throttle } from "lodash";

const ChooseUs = () => {
  const successRate = 90;
  const [isVisible, setIsVisible] = useState(false);
  const [AnimatedNumbers, setAnimatedNumbers] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    }, 100); // Adjust throttle delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Dynamically import AnimatedNumbers component only on the client side
    const fetchComponent = async () => {
      const animatedNumbersModule = await import("react-animated-numbers");
      setAnimatedNumbers(animatedNumbersModule.default);
    };
    fetchComponent();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <section
      className="why-choose-two why-choose-two--services padding"
      id="choose-two"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="why-choose-two__content">
              <div className="sec-title-style3">
                <div className="sub-title">
                  <h5>Why choose us</h5>
                </div>
                <h2>
                  We Provide all Kinds of <br /> Logistics Service
                </h2>
              </div>
              <div className="why-choose-two__content-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Quis gravida risus suspend ultrices gravida.
                </p>
              </div>

              <div className="why-choose-two__progress">
                <div className="why-choose-two__progress-single">
                  <div className="title">
                    <h4>Success Rate {successRate}%</h4>
                  </div>
                  <div className="bar">
                    <div
                      className="bar-inner count-bar"
                      style={{ width: `${successRate}%` }}
                    >
                      <div className="count-text">{successRate}%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-box">
                <Link href="contact">
                  Get Freight <span className="icon-right-arrow-5"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="why-choose-two__counter">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                  data-wow-delay=".1s"
                >
                  <div className="why-choose-two__counter-single">
                    <div className="text-box">
                      <h2 className="count d-flex">
                        <span className="odometer" data-count="35">
                          {isVisible && AnimatedNumbers && (
                            <AnimatedNumbers
                              animateToNumber={35}
                              transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.3,
                              })}
                            ></AnimatedNumbers>
                          )}
                        </span>
                        <span className="plus" style={{ marginLeft: "10px" }}>
                          +
                        </span>
                      </h2>
                      <div className="text">
                        <p>Years Of Experience</p>
                      </div>
                    </div>

                    <div className="icon-box">
                      <span className="icon-experience"></span>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="why-choose-two__counter-single">
                    <div className="text-box">
                      <h2 className="count d-flex">
                        <span className="odometer" data-count="250">
                          {isVisible && AnimatedNumbers && (
                            <AnimatedNumbers
                              animateToNumber={250}
                              transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.3,
                              })}
                            ></AnimatedNumbers>
                          )}
                        </span>
                        <span className="plus" style={{ marginLeft: "10px" }}>
                          K+
                        </span>
                      </h2>
                      <div className="text">
                        <p>Parcels Shipped Safely</p>
                      </div>
                    </div>

                    <div className="icon-box">
                      <span className="icon-shipped1"></span>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="why-choose-two__counter-single">
                    <div className="text-box">
                      <h2 className="count d-flex">
                        <span className="odometer" data-count="365">
                          {isVisible && AnimatedNumbers && (
                            <AnimatedNumbers
                              animateToNumber={365}
                              transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.3,
                              })}
                            ></AnimatedNumbers>
                          )}
                        </span>
                        <span className="plus" style={{ marginLeft: "10px" }}>
                          +
                        </span>
                      </h2>
                      <div className="text">
                        <p>Our Owned Vehicles</p>
                      </div>
                    </div>

                    <div className="icon-box">
                      <span className="icon-road-transport t5"></span>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="why-choose-two__counter-single">
                    <div className="text-box">
                      <h2 className="count d-flex">
                        <span className="odometer" data-count="12">
                          {isVisible && AnimatedNumbers && (
                            <AnimatedNumbers
                              animateToNumber={12}
                              transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.3,
                              })}
                            ></AnimatedNumbers>
                          )}
                        </span>
                        <span className="plus" style={{ marginLeft: "10px" }}>
                          K+
                        </span>
                      </h2>
                      <div className="text">
                        <p>Company We Help</p>
                      </div>
                    </div>

                    <div className="icon-box">
                      <span className="icon-support"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
