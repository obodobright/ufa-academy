import { matchFixtures } from "@/utils/data";
import { MatchCard } from "../card/matchCard";
import { CustomSectionWrapper } from "../layout";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useRef } from "react";

export const MatchesComponent = () => {
  const scrollRef = useRef(null);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  //   useEffect(() => {
  //     const scrollInterval = setInterval(() => {
  //       if (scrollRef.current) {
  //         scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //       }
  //     }, 3000);
  //     // return () => {
  //     //   clearInterval(scrollInterval);
  //     // };
  //   }, [scrollRef.current]);
  return (
    <>
      <>
        <div className="py-12 px-5">
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl md:text-4xl font-bold text-white">Matches</h3>
              <p className="hidden md:block font-medium text-lg text-white">All Matches</p>
            </div>
            <div className="flex items-center">
              <IoIosArrowBack onClick={handlePrev} role="button" className="text-yellow text-5xl" />
              <IoIosArrowForward
                onClick={handleNext}
                role="button"
                className="text-yellow text-5xl"
              />
            </div>
          </section>
          <section
            ref={scrollRef}
            className="overflow-x-auto  scroll-smooth space-x-4  max-w-7xl mx-auto scrollbar-hide flex"
          >
            {matchFixtures.map((match, index) => (
              <div key={index} className="min-w-[400px]">
                <MatchCard match={match} />
              </div>
            ))}
          </section>
        </div>
      </>
    </>
  );
};
