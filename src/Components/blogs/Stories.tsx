import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import CardStory from "./components/CardBlog/CardStory";
import Mune from "./components/Menu/Menu";
const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full space-y-5">
          <div className="flex gap-4 py-10">
            <div className="flex flex-col justify-between">
              <div className="space-y-7">
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
                onPageChange={(page: any) => setCurrentPage(page)}
              />
              </div>
            </div>
          </div>

          {/* <SkeletonCardStory/> */}
        </div>
      </div>
    </div>
  );
};

export default Stories;
