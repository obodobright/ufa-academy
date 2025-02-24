import ugboguFootballNews from "@/utils/data";
import { CustomFullNewCrd } from "../card/CustomNewsCard/CustomFull";
import { CustomShortCard } from "../card/CustomNewsCard/customShortCard";
import { CustomSectionWrapper } from "../layout";

export const News = () => {
  return (
    <section className="w-full px-5 py-5 md:py-12 ">
      <CustomSectionWrapper>
        <div>
          <h2 className="text-4xl font-bold text-blue">News</h2>
          <div className="mt-4 grid md:grid-cols-[65fr_25fr] gap-4">
            <div className="space-y-3">
              <CustomFullNewCrd />
              <CustomFullNewCrd />
            </div>
            <div className="space-y-3">
              {ugboguFootballNews.slice(0, 2).map((data, index) => (
                <CustomShortCard key={index} data={data} />
              ))}
            </div>
          </div>
          <div className="grid gap-2 mt-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {ugboguFootballNews.map((data, index) => (
              <CustomShortCard key={index} data={data} />
            ))}
          </div>
        </div>
      </CustomSectionWrapper>
    </section>
  );
};
