import Link from "next/link";
import { CustomSectionWrapper } from "../layout";
import { Logo } from "../logo";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const navData = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Academy Life", link: "/" },
    { name: "Our Players", link: "/" },
    { name: "Facility", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  return (
    <header className="w-full border-b bg-transparent ">
      <CustomSectionWrapper>
        <nav className="flex justify-between  px-4    items-center">
          <Logo />
          <ul className="hidden md:flex items-center  gap-4">
            {navData.map((navItem, navIndex) => (
              <li
                key={navIndex}
                className="text-base px-4 font-lato transition-all hover:text-yellow font-semibold text-blue  "
              >
                <Link href={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
          <GiHamburgerMenu fontSize={25} className="flex  md:hidden " />
          {/* <button className="border rounded-md py-1 px-3 ">Register</button> */}
        </nav>
      </CustomSectionWrapper>
    </header>
  );
};
