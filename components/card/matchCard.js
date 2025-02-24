import Image from "next/image";

export const MatchCard = ({ match }) => {
  return (
    <div className="border my-2 rounded-md overflow-hidden border-[#ffffff]shadow">
      <div
        className={`flex ${
          match.type === "Home" ? "bg-slate-300" : "bg-yellow"
        }  py-2 px-3   items-center justify-between`}
      >
        <div className="flex items-start gap-2">
          <h3 className={`text-2xl font-bold ${match.type === "Home" ? "text-blue" : ""} `}>
            {match.date}
          </h3>
          <div>
            <h4 className={`text-sm !m-0 font-medium ${match.type === "Home" ? "text-blue" : ""}`}>
              {match.day}
            </h4>
            <p className={`text-xs !m-0  ${match.type === "Home" ? "text-blue" : "text-blue"}`}>
              {match.time}
            </p>
          </div>
        </div>
        <p className={`text-base font-medium ${match.type === "Home" ? "text-blue" : "text-blue"}`}>
          {match.type}
        </p>
      </div>
      <div className="py-3 px-3 mt-3 ">
        <div className="flex items-center justify-center gap-6">
          <ClubLogo logo={match.homeTeam.logo} clubName={match.homeTeam.name} />
          <div className="flex items-center flex-col justify-center">
            <p className="text-sm text-white font-bold">VS</p>
            <h3 className="text-sm py-1 px-2 rounded-full bg-yellow text-white font-semibold">
              {match.stadium}
            </h3>
          </div>
          <ClubLogo logo={match.awayTeam.logo} clubName={match.awayTeam.name} />
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="bg-yellow text-white text-sm hover:bg-white hover:text-blue transition-all px-3 py-1 rounded-full ">
            Match Details
          </button>
        </div>
      </div>
    </div>
  );
};

export const ClubLogo = ({ clubName, logo }) => {
  return (
    <div className="flex gap-2 items-center justify-center flex-col">
      <div className="w-16 h-16 rounded-full bg-white overflow-hidden">
        <Image src={logo} alt="match-logo" width={64} height={64} />
      </div>
      <p className="text-white font-medium text-base">{clubName}</p>
    </div>
  );
};
