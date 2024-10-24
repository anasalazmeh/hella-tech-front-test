import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  stories: {
    image: string;
    description: string;
  }[];
  isLoading?: boolean;
}
const Top5Blogs = ({ title, stories, isLoading }: Props) => {
  const counterSkeleton = [1, 2, 3, 4, 5];
  const {t}=useTranslation()
  return (
    <div>
      <h1 className="capitalize">{t(title)}</h1>
      <div className="ps-1 space-y-5 my-3 mx-2">
        {isLoading
          ? counterSkeleton.map((item) => (
              // Skeletion five stories
              <div className="flex text-[10px] items-center " key={item}>
                <div className="w-[80px]  me-2 rounded-full">
                  <div className="animate-pulse bg-gray-300 mb-5 w-[80px] h-[80px] rounded-full"></div>
                </div>
                <div className="mt-2">
                  <p className="h-1.5 bg-gray-300 rounded-full w-48 mb-2.5"></p>
                  <p className="h-1.5 bg-gray-300 rounded-full w-28 mb-2.5"></p>
                </div>
              </div>
            ))
          : stories.map((item, index) => (
              <div
                className="flex text-[12px] items-center justify-center gap-3"
                key={index}
              >
                <div className="rounded-full w-[150px]  ">
                  <img
                    src={item.image}
                    alt="img"
                    className="w-[80px] h-[80px] rounded-full"
                  />
                </div>
                <div>
                  <p className="uppercase">{item.description}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Top5Blogs;
