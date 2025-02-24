import { players } from "@/utils/data";
import { PlayerCard } from "../card/playerCard";
import { CustomSectionWrapper } from "../layout";

export const PlayerComponent = () => {
  return (
    <>
      <CustomSectionWrapper>
        <section className="px-5 py-5 md:py-12 bg-white">
          <div className="container mx-auto text-left mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-blue">Our Players</h2>
            <p className="text-gray-600 mt-2">FIRST TEAM / UNDER 17 / UNDER 13</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto px-6">
            {players.slice(0, 8).map((pl, index) => (
              <PlayerCard key={index} player={pl} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-7">
            <button className="border border-yellow uppercase mx-auto py-2 px-5 text-base font-semibold rounded text-blue">
              View all players
            </button>
          </div>
        </section>
      </CustomSectionWrapper>
    </>
  );
};
