import React from "react";
import classnames from "classnames";
import { DOTS, usePagination } from "./uesPagination";
import './pagination.css'
import { GoChevronLeft ,GoChevronRight } from "react-icons/go";
const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}:any) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange.length)  < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = (paginationRange[paginationRange?.length - 1]);
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item group", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" >
          <GoChevronLeft className="bg-[#0D1C22] h-6 w-6 text-white rounded-full text-4xl group-hover:bg-main flex justify-center items-center"/>
          </div>
      </li>
      {paginationRange?.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames("pagination-item group", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right group " >
        <GoChevronRight className="bg-[#0D1C22] h-6 w-6 text-white rounded-full text-4xl group-hover:bg-main flex justify-center items-center "/>
        </div>
      </li>
    </ul>
  );
};

export default Pagination;


