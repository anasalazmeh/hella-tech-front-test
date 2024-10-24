import NavBar from "../../Components/NavBar/NavBar";
import HeaderBlog from "../../Components/blogDerails/HeaderBlog";
import HeaderDetailsImage from "../../Components/blogDerails/HeaderDetailsImage";
import Subscribe from "../../Components/blogs/components/MenuTools/Subscribe";
import Container from "../../Components/container/Container";
import img from "./image/Rectangle 9561 (2).png";
import imgg from "./image/Rectangle 9565.png";
import Top5Blogs from "../../Components/blogs/components/MenuTools/Top5Blogs";
import { useEffect, useState } from "react";
import img1 from "./image/Rectangle 9562 (1).png";
import img2 from "./image/image 1.png";
import img3 from "./image/image 2.png";
import img4 from "./image/image 3.png";
import img5 from "./image/image 4.png";
import Menu from "../../Components/blogs/components/Menu/Menu";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SectionNextPreviousBlog from "../../Components/blogDerails/SectionNextPreviousBlog";
const BlogsDetails = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
  const { t } = useTranslation();
  return (
    <>
      <NavBar sectionRefs={null} isVideo />
      <HeaderDetailsImage />
      <Container>
        <div className="px-6 xl:px-0">
          <HeaderBlog />
          <div className="block xl:hidden mt-[20px]">
            <button
              className="border border-main rounded-md px-10 py-2 flex items-center justify-center text-2xl transition-all hover:bg-main hover:text-white "
              onClick={() => setOpen(true)}
            >
              {t("side_menu")} <FaPlus className="text-xl mx-2 mt-2" />
            </button>
          </div>
        </div>
        <div className="flex m-0 xl:gap-5 pb-6">
          <div className="px-6 xl:px-0 ">
            <img src={img} alt="" className="w-full h-[392px] object-fill" />
            <p className="text-[27px] py-2">
              Technological developments, are now more than just innovations,
              profoundly influence production processes and consumers' daily
              lives, changing their habits and behaviours. Comparing production
              technology and daily life in the 1950s with today, the changes are
              striking. Consequently, marketing activities have evolved in
              parallel with technological advancements, leading to Marketing
              4.0. This article aims to reveal changes in marketing activities
              based on technological developments and explain the distinctive
              features of each marketing stage.
            </p>
            <h3 className="text-[27px] py-2 text-main">Marketing 1.0 </h3>
            <img src={imgg} alt="" className="w-full h-[392px] object-fill" />
            <p className="text-[27px]">
              emerged from the Industrial Revolution, focusing on production
              efficiency with businesses using industrial machines to
              mass-produce standardized products. Consumers were viewed as
              passive recipients. As the market expanded, businesses shifted to
              1.0 was characterized by a product-centric approach, relying on
              the 4P strategies (product, price, place, and promotion) and
              tradadvertising to stimulate buying. By the 1950s, the marketing
              concept emerged, focusing on customer satisfaction and finding the
              right products for customers. However, even in this phase, the
              focus remained on physical product features. Marketing 1.0 was
              characterized by a product-centric approach, relying on the 4P
              strategies (product, price, place, and promotion) and
              tradadvertising to stimulate buying. By the 1950s, the marketing
              concept emerged, focusing on customer satisfaction and finding the
              right products for customers. However, even in this phase, the
              focus remained on physical product features. Marketing 1.0 was
              characterized by a product-centric approach, relying on the 4P
              strategies (product, price, place, and promotion) and tradright
              products for customers. However, even in this phase, the focus
              remained on physical product features. Marketing 1.0 was
              characterized by a product-centric approach, relying on the 4P
              strategies (product, price, place
            </p>
            <SectionNextPreviousBlog />
          </div>
          <div className="flex-1">
            <Menu open={open} setOpen={setOpen}>
              <Top5Blogs title="most_read" stories={data} />
              <Top5Blogs title="recent_post" stories={data} />
              <Top5Blogs title="you_may_also_like" stories={data} />
              <Subscribe />
            </Menu>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogsDetails;
