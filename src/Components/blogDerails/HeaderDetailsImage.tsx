import React from "react";
import img from "./Rectangle 9562 (1).png";
import Container from "../container/Container";
const HeaderDetailsImage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #34C87C 0%, #00B08C 100%)",
      }}
      className="py-10 relative"
    >
      <img
        src={img}
        alt=""
        className="absolute top-0 h-full w-full opacity-20 z-10 object-cover"
      />
      <Container>
        <p className="relative z-20 text-white uppercase text-3xl w-full md:w-[700px]">
          IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES
        </p>
      </Container>
    </div>
  );
};

export default HeaderDetailsImage;
