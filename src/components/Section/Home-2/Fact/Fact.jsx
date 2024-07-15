/* eslint-disable @next/next/no-assign-module-variable */
/* eslint-disable @next/next/no-img-element */
"use client";
import { throttle } from "lodash";
import React, { useEffect, useState, useRef } from "react";

const Fact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [AnimatedNumbers, setAnimatedNumbers] = useState(null);
  const sectionRef = useRef(null);

  const handleScroll = throttle(() => {
  useEffect(() => {
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
    const fetchComponent = async () => {
      const module = await import("react-animated-numbers");
      setAnimatedNumbers(module.default);
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
      className="fact-counter-two padding-bottom"
      id="fact-counter"
      ref={sectionRef}
    >
      <div className="shape1 float-bob-y ">
        <img src="/img/shape/counter-v2-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="fact-counter-two__single">
              <div className="icon-box">
                <span className="icon-special-shipments"></span>
              </div>
              <div className="fact-counter-two__single-inner">
                <h2 className="count d-flex">
                  <span className="plus">+</span>
                  <span className="odometer" data-count="250000">
                    {isVisible && AnimatedNumbers && (
                      <AnimatedNumbers
                        animateToNumber={250000}
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                      ></AnimatedNumbers>
                    )}
                  </span>
                </h2>
                <div className="text">
                  <p>Parcels Shipped Safely</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-delay=".3s"
          >
            <div className="fact-counter-two__single">
              <div className="icon-box">
                <span className="icon-global-network"></span>
              </div>
              <div className="fact-counter-two__single-inner">
                <h2 className="count d-flex">
                  <span className="plus">+</span>
                  <span className="odometer" data-count="95000">
                    {isVisible && AnimatedNumbers && (
                      <AnimatedNumbers
                        animateToNumber={95000}
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                      ></AnimatedNumbers>
                    )}
                  </span>
                </h2>
                <div className="text">
                  <p>Cities Served Worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="fact-counter-two__single">
              <div className="icon-box">
                <span className="icon-satisfied3"></span>
              </div>
              <div className="fact-counter-two__single-inner">
                <h2 className="count d-flex">
                  <span className="plus">+</span>
                  <span className="odometer" data-count="2560">
                    {isVisible && AnimatedNumbers && (
                      <AnimatedNumbers
                        animateToNumber={2560}
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                      ></AnimatedNumbers>
                    )}
                  </span>
                </h2>
                <div className="text">
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-delay=".3s"
          >
            <div className="fact-counter-two__single">
              <div className="icon-box">
                <span className="icon-support"></span>
              </div>
              <div className="fact-counter-two__single-inner">
                <h2 className="count d-flex">
                  <span className="plus">+</span>
                  <span className="odometer" data-count="1200">
                    {isVisible && AnimatedNumbers && (
                      <AnimatedNumbers
                        animateToNumber={1200}
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                      ></AnimatedNumbers>
                    )}
                  </span>
                </h2>
                <div className="text">
                  <p>Company We Help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
