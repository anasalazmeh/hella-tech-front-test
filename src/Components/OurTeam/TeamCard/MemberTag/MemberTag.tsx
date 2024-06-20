interface IProps {
  name: string;
}
const MemberTag = ({ name }: IProps) => {
  return (
    <div className="border-solid border-[#34c87c] bg-white flex flex-col w-fit shrink-0 items-center pb-px px-2 border rounded-lg">
      <div className="text-center whitespace-nowrap  text-[#0d1c22]">
        {name}
      </div>
    </div>
  );
};

export default MemberTag;
