import React from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaBoxes,
  FaUser,
  FaComments,
  FaRoute,
  FaMoneyBillWave,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";
import Link from "next/link";
const ServiceCardSix = ({ item }) => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "FaTruck":
        return <FaTruck color="#ff7d13" />;
      case "FaMapMarkerAlt":
        return <FaMapMarkerAlt color="#ff7d13" />;
      case "FaBoxes":
        return <FaBoxes color="#ff7d13" />;
      case "FaUser":
        return <FaUser color="#ff7d13" />;
      case "FaComments":
        return <FaComments color="#ff7d13" />;
      case "FaRoute":
        return <FaRoute color="#ff7d13" />;
      case "FaMoneyBillWave":
        return <FaMoneyBillWave color="#ff7d13" />;
      case "FaShieldAlt":
        return <FaShieldAlt color="#ff7d13" />;
      case "FaFileAlt":
        return <FaFileAlt color="#ff7d13" />;
      default:
        return null;
    }
  };
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="services-three__single">
        <div className="services-three__single-img">
          <div className="inner">
            <img
              src={item?.image}
              alt=""
              style={{ width: "100%", height: "225px", objectFit: "cover" }}
            />
            <div className="icon-box">{getIconComponent(item.icon)}</div>
          </div>
        </div>
        <div className="services-three__single-content">
          <div className="services-three__single-content-inner">
            <h2>
              <Link href={item?.link}>{item?.title}</Link>
            </h2>
            <p>{item?.description}</p>
            <div className="count-box">{item?.count}</div>
            <div className="btn-box">
              <Link href={item?.link}>
                Read More <i className="icon-right-arrow-5"></i>
              </Link>
              <div className="number-box">{item?.count}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSix;
