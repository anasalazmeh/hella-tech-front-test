import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full xl:w-[1225px]  lg:w-full space-y-5">{children}</div>
    </div>
  );
};

export default Container;
