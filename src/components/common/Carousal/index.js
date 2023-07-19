import { Carousel } from "antd";
import React from "react";

const CommonCarousal = ({ children }) => {
  const responsiveSettings = [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <Carousel
      dots={{ className: "custom-dot" }}
      responsive={responsiveSettings}
      slidesToShow={3}
      slidesToScroll={3}
    >
      {children}
    </Carousel>
  );
};

export default CommonCarousal;
