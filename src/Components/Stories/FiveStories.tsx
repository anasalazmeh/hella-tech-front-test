interface Props {
  title: string;
  stories: {
    image: string;
    description: string;
  }[];
  isLoading?: boolean;
}
const FiveStories = ({ title, stories, isLoading }: Props) => {
  const counterSkeleton = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1 className="capitalize">{title}</h1>
      <div className="ps-1 space-y-4 my-3 mx-2">
        {isLoading
          ? counterSkeleton.map((item) => (
              // Skeletion five stories
              <div className="flex text-[10px] items-center " key={item}>
                <div className="w-[80px]  me-2 rounded-full">
                  <div className="animate-pulse bg-gray-300 mb-5 w-[60px] h-[60px] rounded-full"></div>
                </div>
                <div className="mt-2">
                  <p className="h-1.5 bg-gray-300 rounded-full w-48 mb-2.5"></p>
                  <p className="h-1.5 bg-gray-300 rounded-full w-28 mb-2.5"></p>
                </div>
              </div>
            ))
          : stories.map((item, index) => (
              <div
                className="flex text-[10px] items-center justify-center space-x-2"
                key={index}
              >
                <div className="rounded-full w-[120px]  ">
                  <img
                    src={item.image}
                    alt="img"
                    className="w-[60px] h-[60px] rounded-full"
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

export default FiveStories;
