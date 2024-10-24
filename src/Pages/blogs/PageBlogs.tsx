import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Header from "../../Components/blogs/components/HeaderPageBlogs/Header";
import Stories from "../../Components/blogs/Stories";
import img1 from "./image/Rectangle 9562 (1).png";
import img2 from "./image/image 1.png";
import img3 from "./image/image 2.png";
import img4 from "./image/image 3.png";
import img5 from "./image/image 4.png";
import Container from "../../Components/container/Container";
import Menu from "../../Components/blogs/components/Menu/Menu";
import BoxSearch from "../../Components/blogs/components/MenuTools/BoxSearch";
import Categories from "../../Components/blogs/components/MenuTools/Categories";
import Subscribe from "../../Components/blogs/components/MenuTools/Subscribe";
import FiveStories from "../../Components/blogs/components/MenuTools/Top5Blogs";
import CardStory from "../../Components/blogs/components/CardBlog/CardStory";
import Pagination from "../../Components/Pagination/Pagination";
import { FaPlus } from "react-icons/fa";

const PageStories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);
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
    <>
      <NavBar sectionRefs={null} isVideo />
      <Header />
      <Container>
        <div className="block md:hidden">
          <button
            className="border border-main rounded-md px-10 py-2 flex items-center justify-center text-2xl transition-all hover:bg-main hover:text-white "
            onClick={() => setOpen(true)}
          >
            Fliter <FaPlus className="text-xl mx-2 mt-2" />
          </button>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <CardStory />
              <CardStory />
              <CardStory />
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={100}
                pageSize={pageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </div>
          </div>
          <div className="flex-1">
            <Menu open={open} setOpen={setOpen}>
              <BoxSearch />
              <Categories />
              <FiveStories title="most-read" stories={data} />
              <FiveStories title="recent_post" stories={data} />
              <Subscribe />
            </Menu>
          </div>
        </div>
        {/* <Stories /> */}
      </Container>
    </>
  );
};

export default PageStories;
