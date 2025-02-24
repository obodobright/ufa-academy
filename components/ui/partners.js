import { partnersData } from "@/utils/data";
import { CustomSectionWrapper } from "../layout";
import Image from "next/image";

export const Partners = () => {
  return (
    <section className="w-full py-5 px-5 md:py-12 bg-blue">
      <CustomSectionWrapper>
        <div className="container mx-auto text-left mb-8">
          <h2 className="text-4xl font-bold text-white">Partners</h2>
          <p className="text-sm font-medium text-gray-400">
            Ugbogu FA partners with top investors to develop young, skilled footballers and boost
            their chances of being scouted.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-5">
          {partnersData.map((data, index) => (
            <Image
              alt="partner_img"
              src={data.img}
              width={200}
              height={200}
              key={index}
              className="rounded"
            />
          ))}
        </div>
      </CustomSectionWrapper>
    </section>
  );
};
