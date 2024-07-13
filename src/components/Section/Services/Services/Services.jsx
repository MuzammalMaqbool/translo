"use client";

import { useEffect, useState } from "react";
import ServiceCardFive from "~/components/Ui/Cards/ServiceCardFive";
import ServiceCardSix from "~/components/Ui/Cards/ServiceCardSix";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./db/serviceFive.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="services-three services-three--services padding">
      <div className="container">
        <div className="services-three--services__top">
          <div className="title-box">
            <h2>
              We Provide all Kinds of <br /> Logistics Service
            </h2>
          </div>

          <div className="text-box">
            <p>
              We provide all kinds of logistics services to meet your business
              needs. Our services include transportation, warehousing, and
              distribution services. We also offer freight forwarding and
              customs brokerage services to help you move your goods across
              borders. Whether you need to ship goods by air, sea, or land, we
              have the expertise to get your cargo to its destination on time
              and on budget.
            </p>
          </div>
        </div>
        <div className="row">
          {data?.map((item, index) => (
            <ServiceCardSix item={item} key={index}></ServiceCardSix>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
