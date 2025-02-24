import { useState } from "react";
import { CustomSectionWrapper } from "../layout";
import { FixturesTable } from "./fixturesTable";
import { MatchesComponent } from "./matches";

export const ViewTournament = () => {
  const tab = ["Matches", "Fixtures"];
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-blue w-full py-12 px-4   ">
      <CustomSectionWrapper>
        <div>
          <h2 className="text-3xl font-bold text-white">Evolution Cup `25</h2>

          <div className="flex items-center mt-2 gap-2">
            {tab.map((tb, index) => (
              <button
                onClick={() => setCurrent(index)}
                key={index}
                className={`transition-all text-base ${
                  current === index ? "border-b-2 border-yellow font-medium" : "font-normal"
                }   text-white`}
              >
                {tb}
              </button>
            ))}
          </div>
          {current == 0 ? <MatchesComponent /> : <FixturesTable />}
        </div>
      </CustomSectionWrapper>
    </section>
  );
};
