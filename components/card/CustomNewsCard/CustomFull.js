import { FaCalendar } from "react-icons/fa";
export const CustomFullNewCrd = () => {
  return (
    <div
      style={{ backgroundPosition: "0px", backgroundImage: "url(/asset/club_img/ufa_img_1.png)" }}
      className="w-full rounded relative bg-red-400 min-h-[300px] bg-no-repeat bg-cover  "
    >
      <div className=" absolute bottom-0  w-full  ">
        <div style={{ background: "rgba(0, 0, 0, 0.6)" }} className="bg-  px-3 py-3">
          <button className="bg-blue text-white px-3 rounded-full ">Sports</button>

          <h3 className="text-white font-bold text-base md:text-2xl">
            {" "}
            James Wilner Open Berated Liverpool, Teammmate Vigil Van dijk after sluggish Led to
            Sancho Goal
          </h3>
          <div className="flex items-center gap-5 mt-2">
            <div className="flex items-center gap-2">
              <FaCalendar color="white" />
              <p className="text-white text-sm">Today</p>
            </div>
            <p className="text-sm font-medium text-white">By Angela Yu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
