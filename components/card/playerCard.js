import { TbShirtFilled } from "react-icons/tb";
import { BiSolidTShirt } from "react-icons/bi";
import Image from "next/image";

export const PlayerCard = ({ player }) => {
  return (
    <div className="w-full relative  ">
      <div className="w-full h-[200px]  overflow-hidden  flex items-center justify-center bg-white ">
        <Image src={player?.image} alt="player-image" width={300} height={200} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center font-bold text-2xl text-blue absolute top-2 right-2 rounded-full bg-yellow">
        {player.shirtNumber}
      </div>
      <div className="flex items-center justify-between py-2 px-2">
        <div>
          <h3 className="text-xl font-semibold text-blue">{player.name}</h3>
          <p className="text-gray-400 font-medium uppercase ">{player.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <TbShirtFilled className="text-yellow" fontSize={25} />
          <p className="text=lg font-bold text-blue"> {player.designation ? "C" : ""}</p>
        </div>
      </div>
    </div>
  );
};
