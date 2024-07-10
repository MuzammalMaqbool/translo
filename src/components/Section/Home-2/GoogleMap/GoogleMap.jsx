"use client"
import Link from 'next/link'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function GoogleMap() {
  return (
    <section  className="google-map-one">
      <div  className="container clearfix">
        <div  className="google-map-one__content clearfix">
          <div  className="inner-box">
            <div  className="title-box text-center">
              <h2>Contact With Us</h2>
            </div>
            <Accordion
              defaultActiveKey="0"
               className=" accordion-two map-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2>
                    <span></span>
                    Towson Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div  className="accrodion-content">
                    <div  className="inner">
                      <ul  className="accrodion-content-list">
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-pin"></span>
                          </div>
                          <p>913 Southerly Road, Winthrop Apt 038, Towson MD</p>
                        </li>
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link href="mailto:yourmail@email.com">Info@theaksolutions.com</Link>
                          </p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-out-call"></span>
                          </div>
                          <p><Link href="tel:+14438240078">+1 443 824 0078</Link></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2>
                    <span></span>
                    Canada Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div  className="accrodion-content">
                    <div  className="inner">
                      <ul  className="accrodion-content-list">
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-pin"></span>
                          </div>
                          <p>Jones Street, New York, USA</p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link href="mailto:yourmail@email.com"
                            >Info@example.com</Link>
                          </p>
                        </li>
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-out-call"></span>
                          </div>
                          <p><Link href="tel:123456789">+70 264 566 579</Link></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h2>
                    <span></span>
                    London Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div  className="accrodion-content">
                    <div  className="inner">
                      <ul  className="accrodion-content-list">
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-pin"></span>
                          </div>
                          <p>Jones Street, New York, USA</p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link href="mailto:yourmail@email.com"
                            >Info@example.com</Link>
                          </p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-out-call"></span>
                          </div>
                          <p><Link href="tel:123456789">+70 264 566 579</Link></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.7059787885673!2d-76.60476672443308!3d39.408157471619504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80facbc66591b%3A0x97f6049c55561011!2sWinthrop!5e0!3m2!1sen!2sus!4v1720123921329!5m2!1sen!2sus"
         className="google-map-one__map"
        allowfullscreen>
      </iframe>
    </section>
  )
}