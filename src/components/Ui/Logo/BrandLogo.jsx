"use client";
/* eslint-disable @next/next/no-img-element */

const BrandLogo = ({ imageSrc }) => {
  const defaultImageSrc = "/img/resource/logo-2.png";
  const logoSrc = imageSrc || defaultImageSrc;

  return (
    // <img src={logoSrc} alt="" />
    <>
      <h2 style={{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "24px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginTop: "10px",
        marginBottom: "10px"
      }}>The AK Solutions</h2>
    </>
  );
};

export default BrandLogo;
