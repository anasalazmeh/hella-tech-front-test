import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const BoxSearch = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    setSearch(searchParams.get("search")||"")
  },[])
  const setURLParams = () => {
    const URLParam = new URLSearchParams(searchParams);
    if (search.length > 0) {
      if (URLParam.has("search")) {
        if (URLParam.get("search") !== search) {
          URLParam.delete("search");
          URLParam.append("search", search);
          setSearchParams(URLParam);
        }
      } else {
        URLParam.append("search", search);
        setSearchParams(URLParam);
      }
    }
  };
  const deleteURLParams = () => {
    const URLParam = new URLSearchParams(searchParams);
    URLParam.delete("search");
    setSearchParams(URLParam);
  };
  const {t} =useTranslation()
  return (
    <div className="flex h-10 w-full">
      <button
        className="bg-main w-10 flex justify-center items-center"
        onClick={setURLParams}
      >
        <FaSearch />
      </button>
      <input
        type="text"
        className="w-full ps-2 text-black outline-none "
        placeholder={t("search")+"..."}
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setSearch(e.target.value);
          } else {
            setSearch('')
            deleteURLParams();
          }
        }}
        value={search}
      />
    </div>
  );
};

export default BoxSearch;
