import Link from "next/link";
import { CustomSectionWrapper } from "../layout";
import { Logo } from "../logo";

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
        <nav className="flex justify-between     items-center">
          <Logo />
          <ul className="flex items-center gap-4">
            {navData.map((navItem, navIndex) => (
              <li
                key={navIndex}
                className="text-base px-4 font-lato transition-all hover:text-yellow font-semibold text-blue  "
              >
                <Link href={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
          {/* <button className="border rounded-md py-1 px-3 ">Register</button> */}
        </nav>
      </CustomSectionWrapper>
    </header>
  );
};
