import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCatecgories] = useState<string[]>([]);
  useEffect(() => {
    setCatecgories(searchParams.getAll("catecgory"));
  }, []);

  const setsearchparams = (checked: boolean, catecgory: string) => {
    if (checked) {
      if (categories.length > 0) {
        setCatecgories([...categories, catecgory]);
      } else {
        setCatecgories([catecgory]);
      }
      const urlParam = new URLSearchParams(searchParams);
      urlParam.append("catecgory", catecgory);
      setSearchParams(urlParam);
    } else {
      setCatecgories(categories?.filter((item) => item !== catecgory));
      const groupCatecgories = categories?.filter((item) => item !== catecgory);
      const urlParam = new URLSearchParams(searchParams);
      urlParam.delete("catecgory");
      groupCatecgories?.map((item) => urlParam.append("catecgory", item));
      setSearchParams(urlParam);
    }
    console.log(categories);
  };
  const {t} =useTranslation()
  return (
    <div>
      <h1>{t("categories")}</h1>
      <div className="px-4 space-y-2">
        <div className="flex gap-3 items-center text-xl">
          <input
            type="checkbox"
            id="digital"
            className=" w-4 h-4 accent-main"
            checked={
              categories.find((item) => item === "Digital") ? true : false
            }
            onChange={(e) => {
              setsearchparams(e.target.checked, "Digital");
            }}
          />
          <label htmlFor="digital" className="capitalize">
            Digital
          </label>
        </div>
        <div className="flex gap-3 items-center text-xl">
          <input
            type="checkbox"
            name=""
            id="ecommerce"
            className=" w-4 h-4 accent-main"
            checked={
              categories.find((item) => item === "e commerce") ? true : false
            }
            onChange={(e) => {
              setsearchparams(e.target.checked, "e commerce");
            }}
          />
          <label htmlFor="ecommerce" className="capitalize">
            e commerce
          </label>
        </div>
        <div className="flex gap-3 items-center  text-xl">
          <input
            type="checkbox"
            name=""
            id="tech"
            className=" w-4 h-4 accent-main"
            checked={
              categories.find((item) => item === "Tech") ? true : false
            }
            onChange={(e) => {
              setsearchparams(e.target.checked, "Tech");
            }}
          />
          <label htmlFor="tech" className="capitalize">
            Tech
          </label>
        </div>
        <div className="flex gap-3 items-center text-xl">
          <input
            type="checkbox"
            name=""
            id="news"
            className=" w-4 h-4 accent-main"
            checked={
              categories.find((item) => item === "news") ? true : false
            }
            onChange={(e) => {
              setsearchparams(e.target.checked, "news");
            }}
          />
          <label htmlFor="news" className="capitalize">
            news
          </label>
        </div>
      </div>
    </div>
  );
};

export default Categories;
