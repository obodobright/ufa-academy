import { CustomSectionWrapper } from "@/components/layout";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export const FooterComponent = () => {
  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/share/MhweUZMPrEtjRag8/?mibextid=wwXIfr",
      icon: <FaFacebookF />,
    },
    { name: "Twitter", link: "https://x.com/uborafootball?s=11", icon: <FaXTwitter /> },
    {
      name: "Instagram",
      link: "https://www.instagram.com/theufa.academy/profilecard/?igsh=dWhqYmU1ZGx0YzUy",
      icon: <FaInstagram />,
    },
    { name: "Email", link: "mailto:Ufaacademy01@gmail.com", icon: <MdOutlineMailOutline /> },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCTmNzjv1OGraizcGnVme7Kw",
      icon: <FaYoutube />,
    },
  ];
  return (
    <footer className="w-full  ">
      <CustomSectionWrapper>
        <div className="w-full py-3 pt-6 gap-5 md:gap-12  flex flex-wrap items-center justify-center">
          {socials.map((sc, index) => (
            <Link target="_blank" key={index} href={sc.link}>
              <div className="text-5xl transition-all hover:text-yellow font-bold text-blue">
                {sc.icon}
              </div>
            </Link>
          ))}
        </div>
      </CustomSectionWrapper>
      <div className="w-full py5 bg-white">
        <CustomSectionWrapper>
          <div className="flex relative items-center justify-center flex-col">
            <Logo size={250} />
            <div className="relative flex items-center justify-center flex-wrap -top-10">
              <Link
                className="text-lg px-2 hover:text-yellow transition-all font-semibold text-blue"
                href=""
              >
                About Us
              </Link>{" "}
              |{" "}
              <Link
                className="text-lg px-2 hover:text-yellow transition-all font-semibold text-blue"
                href=""
              >
                Our Team
              </Link>{" "}
              |{" "}
              <Link
                className="text-lg px-2 hover:text-yellow transition-all font-semibold text-blue"
                href=""
              >
                Sponsorship
              </Link>{" "}
              |{" "}
              <Link
                className="text-lg px-2 hover:text-yellow transition-all font-semibold text-blue"
                href=""
              >
                Facility
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="uppercase font-semibold text-blue">You want to stay up to date</h3>
              <button className="bg-yellow uppercase py-1 px-3 text-white">Subscribe</button>
            </div>
          </div>
          <div className=" py-4 mt-4 md:flex items-center justify-between">
            <div className="flex md:flex-row flex-col items-center gap-5">
              <Link href="" className="text-blue text-base">
                Privacy Policy
              </Link>
              <Link href="" className="text-blue text-base">
                Terms and Condition
              </Link>
              <Link href="" className="text-blue text-base">
                Help and Support
              </Link>
            </div>
            <p className="text-base text-center md:text-right mt-4 md:mt-0 px-5 font-semibold text-blue">
              © Ubogu FA 2025
            </p>
          </div>
        </CustomSectionWrapper>
      </div>
    </footer>
  );
};
