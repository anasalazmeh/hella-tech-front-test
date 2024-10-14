import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import CardStory from "./CardStory";
import Mune from "./Mune";
const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full space-y-5">
          <div className="flex gap-4 py-10">
            <div className="space-y-4">
              <CardStory />
              <CardStory />
              <CardStory />
              {currentPage}&#8230;
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={100}
                pageSize={pageSize}
                onPageChange={(page:any) => setCurrentPage(page)}
              />
            </div>
            <Mune />
          </div>

          {/* <SkeletonCardStory/> */}
        </div>
      </div>
    </div>
  );
};

export default Stories;
