"use client";
import React from "react";
import Heading from "./Heading";
import ConversionRate from "../../public/assets/Conversion-Rate.png";
import UIUX from "../../public/assets/UI-UX-design.png";
import WebDevelopment from "../../public/assets/Web-development.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-9 right-10   p-2 px-3 rounded-full " style={{backgroundColor:'rgb(211, 195, 248)'}}
    >
             &#8594;

    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-9 right-20  p-2 px-3 rounded-full " style={{backgroundColor:'rgb(211, 195, 248)'}}
    >
      &#8592;
    </button>
  );
};

const EnhancExp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const services = [
    {
      image: ConversionRate,
      title: "Conversion Rate Optimisation",
      features: [
        "Design Optimization",
        "Speed Optimization",
        "On Page SEO",
        "Tech Maintenance & Support",
      ],
    },
    {
      image: UIUX,
      title: "UI / UX Design",
      features: [
        "Landing Pages",
        "Visual Identity (Web & Digital)",
        "Icons & Illustrations",
        "Assets & Components",
      ],
    },
    {
      image: WebDevelopment,
      title: "Web Development",
      features: [
        "Code & E-commerce Customization",
        "Third Party & Custom Apps",
        "Front End Development",
        "Back end & CMS Setup",
      ],
    },
  ];

  return (
    <div className="mt-20 mb-10 px-2">
      <div className="w-full md:text-center text-left pl-2">
        <Heading
          heading={
            <>
              Enhance customer experience <br /> by focusing on the details that
              matter most
            </>
          }
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row gap-6 justify-center mt-20">
  {services.map((service, index) => (
    <div
      key={index}
      className="p-4 border rounded-md w-96"  // Ensure equal width
      style={{ backgroundColor: "#F4F1FF", border: "solid 1px #ddd1fa" }}
    >
      <Image
        src={service.image}
        alt="Service Image"
        width={180}
        height={180}
        className="mb-4 mx-auto"
      />
      <Heading heading={<span className="text-3xl">{service.title}</span>} />
      <ul className="pt-5 purple text-lg md:text-xl pl-2 md:pl-4">
        {service.features.map((feature, i) => (
          <li key={i} style={{ fontSize: "16px" }}>
            <span className="text-purple-400 pr-2">&#10003;</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

      {/* Mobile Slider View */}
      <div className="md:hidden mt-10 relative">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4 border rounded-md mx-8 gap-5"  style={{ backgroundColor: "#d3c3f8" , border: "solid 1px #ddd1fa" }}>
              <Image
                src={service.image}
                alt="Service Image"
                width={180}
                height={180}
                className="mb-4 mx-auto"
              />
              <Heading heading={<span className="text-3xl">{service.title}</span>} />
              <ul className="pt-5 purple text-lg md:text-xl pl-2 md:pl-4">
                {service.features.map((feature, i) => (
                  <li key={i} style={{ fontSize: "17px" }}>
                    <span className="text-purple-400 pr-2">&#10003;</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EnhancExp;
