import { fixturesData } from "@/utils/data";
import { CustomSectionWrapper } from "../layout";

export const FixturesTable = () => {
  const isActive = true;
  return (
    <section className="py-12">
      <section className="w-full overflow-auto border-collapse ">
        <table className="w-full overflow-auto border  table rounded-md table-fixed ">
          <thead className=" rounded-md">
            <tr className="w-full bg-slate-300 h-10 rounded-2xl  ">
              <th className="text-left text-blue   px-3 font-medium text-lg w-[15%] md:w-[5%] ">
                POS
              </th>
              <th className="text-left text-blue  px-3  font-medium text-lg  ">CLUB</th>
              <th className="text-left text-blue  w-[15%] md:w-[5%]  px-3  font-medium text-lg ">
                PL
              </th>
              <th className="text-left text-blue  w-[15%] md:w-[5%]  px-3  font-medium text-lg ">
                GD
              </th>
              <th className="text-left text-blue  w-[15%] md:w-[5%]  px-3  font-medium text-lg ">
                PTS
              </th>
            </tr>
          </thead>
          <tbody>
            {fixturesData.map((dta, index) => (
              <tr key={index} className={`${dta.isActive ? "bg-yellow" : "bg-transparent"}`}>
                <td
                  className={`text-center py-3 w-[15%] md:w-[5%] !m-4  px-3   text-xl font-semibold ${
                    dta.isActive ? "text-white" : "text-white"
                  }`}
                >
                  {dta.pos}
                </td>
                <td
                  className={`text-left py-3  px-3   text-xl font-semibold ${
                    dta.isActive ? "text-white" : "text-white"
                  }`}
                >
                  {dta.clubName}
                </td>
                <td
                  className={`text-center py-3 w-[5%]  px-3   text-xl font-semibold ${
                    dta.isActive ? "text-white" : "text-white"
                  }`}
                >
                  {dta.pl}
                </td>
                <td
                  className={`text-center py-3 w-[5%]  px-3   text-xl font-semibold ${
                    dta.isActive ? "text-white" : "text-white"
                  }`}
                >
                  {dta.gd}
                </td>
                <td
                  className={`text-center py-3 w-[5%]  px-3   text-xl font-semibold ${
                    dta.isActive ? "text-white" : "text-white"
                  }`}
                >
                  {dta.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};
