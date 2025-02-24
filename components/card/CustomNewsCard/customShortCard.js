import Image from "next/image";
import { FaCalendar } from "react-icons/fa6";

export const CustomShortCard = ({ data }) => {
  return (
    <div className="md:max-w-xs my-1">
      <div className="w-full rounded overflow-hidden h-[200px] bg-gray-300 ">
        <Image
          alt="news_img"
          width={200}
          className="w-full  transition-transform duration-300 ease-in-out hover:scale-110"
          height={200}
          src={data?.img}
        />
      </div>
      <div>
        <h3 className="text-base text-blue font-semibold">{data?.title}</h3>
        <div className="flex items-center gap-5 mt-2">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-blue" />
            <p className="text-blue text-sm">{data?.date}</p>
          </div>
          <p className="text-sm font-medium text-gray-600">By {data?.authorName}</p>
        </div>
      </div>
    </div>
  );
};
