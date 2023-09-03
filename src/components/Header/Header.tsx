import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Container from "../Shared/Container/Container";
import SignUp from "../SignUp/SignUp";
import Login from "@/components/Login/Login";

const Header = () => {
  return (
    <header className=" h-20 mb-[55px]  border-b-2 bg-white shadow-md ">
      <Container>
        <div className="w-full flex items-center justify-between h-full pt-4">
          <Logo />
          <div>
            <List
              className=" gap-3 font-semibold text-lg text-[#1D1D35] hidden md:flex"
              options={[
                {
                  id: 1,
                  href: "/",
                  content: "الرئيسية",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
                {
                  id: 2,
                  href: "/services",
                  content: "الخدمات",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
                {
                  id: 3,
                  href: "/about-us",
                  content: "من نحن",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
                {
                  id: 3,
                  href: "/contact",
                  content: " اتصل بنا",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
              ]}
            />
          </div>

          <div>
            <List
              className="flex sm:gap-4 gap-1 items-center  "
              options={[
                {
                  href: "",
                  content: <Login />,
                },
                {
                  href: "",
                  content: "احجز الآن",
                  classNameOfLI:
                    "text-xl pb-3 bg-[#00ADEE] text-white  hidden md:block rounded-full  hover:bg-opacity-90 ease-in-out duration-150  pt-2  font-semibold text-center border-2 border-[#00ADEE] w-[120px] h-[50px]",
                },
              ]}
            />
            <MenuItems
              className="md:hidden"
              shape={<MenuIcon className="text-4xl text-[#00ADEE]" />}
              Items={[
                { href: "/auth/register", content: "الرئيسية " },
                { href: "/auth/login", content: "الخدمات" },
                { href: "/auth/login", content: "من نحن" },
                { href: "/auth/login", content: "اتصل بنا" },
                { href: "/auth/login", content: "دخول" },
                { href: "/auth/login", content: "احجز الآن" },
              ]}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
