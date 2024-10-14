import React from "react";
import { FaSearch } from "react-icons/fa";
import FiveStories from "./FiveStories";
import img1 from "./image/Rectangle 9562 (1).png";
import img2 from "./image/image 1.png";
import img3 from "./image/image 2.png";
import img4 from "./image/image 3.png";
import img5 from "./image/image 4.png";
import Categories from "./Categories";
import Subscribe from "./Subscribe";
import Search from "./BoxSearch";
import BoxSearch from "./BoxSearch";
const Mune = () => {
  const data = [
    {
      id: 1,
      image: img1,
      description:
        "IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES",
    },
    {
      id: 2,
      image: img2,
      description:
        "IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES",
    },
    {
      id: 3,
      image: img3,
      description:
        "IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES",
    },
    {
      id: 4,
      image: img4,
      description:
        "IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES",
    },
    {
      id: 5,
      image: img5,
      description:
        "IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES",
    },
  ];
  return (
    <div className="bg-[#0D1C22] text-white px-4 py-14 rounded-md w-[350px] space-y-9 hidden xl:block">
      <BoxSearch/>
      <Categories/>
      <FiveStories title="top 5 most-Read" stories={data} />
      <FiveStories title="recent post" stories={data} />
      <Subscribe/>
    </div>
  );
};

export default Mune;
