import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Container from "../Shared/Container/Container";
import Login from "@/components/Login/Login";

const Header = (props: any) => {
  return (
    <>
      {props.isAuthorized ? (
        <header className=" h-20 mb-[55px]  border-b-2 bg-white shadow-md ">
          <Container>
            <div className="w-full flex items-center justify-between h-full pt-4">
              <Logo />
              <div>
                <List
                  className=" gap-3 font-semibold text-lg text-[#1D1D35] hidden lg:flex"
                  options={[
                    {
                      id: 1,
                      href: "/home",
                      content: "الرئيسية",
                      classNameOfLI:
                        "hover:bg-blue-50 ease-in-out duration-150 p-2",
                    },
                    {
                      id: 2,
                      href: "/service",
                      content: "الخدمات",
                      classNameOfLI:
                        "hover:bg-blue-50 ease-in-out duration-150 p-2",
                    },
                    {
                      id: 3,
                      href: "/about",
                      content: "من نحن",
                      classNameOfLI:
                        "hover:bg-blue-50 ease-in-out duration-150 p-2",
                    },
                    {
                      id: 3,
                      href: "/contact-us",
                      content: " اتصل بنا",
                      classNameOfLI:
                        "hover:bg-blue-50 ease-in-out duration-150 p-2",
                    },
                    {
                      id: 4,
                      href: "/dashborad",
                      content: "لوحة التحكم",
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
                      href: "/book",
                      content: "احجز الآن",
                      classNameOfLI:
                        "text-xl pb-3 bg-[#00ADEE] text-white  hidden lg:block rounded-full  hover:bg-opacity-90 ease-in-out duration-150  pt-2  font-semibold text-center border-2 border-[#00ADEE] w-[120px] h-[50px]",
                    },
                  ]}
                />
                <MenuItems
                  className="lg:hidden"
                  shape={<MenuIcon className="text-4xl text-[#00ADEE]" />}
                  Items={[
                    { href: "/home", content: "الرئيسية " },
                    { href: "/dashborad", content: "لوحة التحكم " },
                    { href: "/service", content: "الخدمات" },
                    { href: "/about", content: "من نحن" },
                    { href: "/contact-us", content: "اتصل بنا" },
                    { href: "", content: "دخول" },
                    { href: "/book", content: "احجز الآن" },
                  ]}
                />
              </div>
            </div>
          </Container>
        </header>
      ) : (
        <>
          {props.isDashboradPath ? (
            ""
          ) : (
            <header className=" h-20 mb-[55px]  border-b-2 bg-white shadow-md ">
              <Container>
                <div className="w-full flex items-center justify-between h-full pt-4">
                  <Logo />
                  <div>
                    <List
                      className=" gap-3 font-semibold text-lg text-[#1D1D35] hidden lg:flex"
                      options={[
                        {
                          id: 1,
                          href: "/home",
                          content: "الرئيسية",
                          classNameOfLI:
                            "hover:bg-blue-50 ease-in-out duration-150 p-2",
                        },
                        {
                          id: 2,
                          href: "/service",
                          content: "الخدمات",
                          classNameOfLI:
                            "hover:bg-blue-50 ease-in-out duration-150 p-2",
                        },
                        {
                          id: 3,
                          href: "/about",
                          content: "من نحن",
                          classNameOfLI:
                            "hover:bg-blue-50 ease-in-out duration-150 p-2",
                        },
                        {
                          id: 3,
                          href: "/contact-us",
                          content: " اتصل بنا",
                          classNameOfLI:
                            "hover:bg-blue-50 ease-in-out duration-150 p-2",
                        },
                        {
                          id: 4,
                          href: "/dashborad",
                          content: "لوحة التحكم",
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
                          href: "/book",
                          content: "احجز الآن",
                          classNameOfLI:
                            "text-xl pb-3 bg-[#00ADEE] text-white  hidden lg:block rounded-full  hover:bg-opacity-90 ease-in-out duration-150  pt-2  font-semibold text-center border-2 border-[#00ADEE] w-[120px] h-[50px]",
                        },
                      ]}
                    />
                    <MenuItems
                      className="lg:hidden"
                      shape={<MenuIcon className="text-4xl text-[#00ADEE]" />}
                      Items={[
                        { href: "/home", content: "الرئيسية " },
                        { href: "/dashborad", content: "لوحة التحكم " },
                        { href: "/service", content: "الخدمات" },
                        { href: "/about", content: "من نحن" },
                        { href: "/contact-us", content: "اتصل بنا" },
                        { href: "", content: "دخول" },
                        { href: "/book", content: "احجز الآن" },
                      ]}
                    />
                  </div>
                </div>
              </Container>
            </header>
          )}
        </>
      )}
    </>
  );
};

export default Header;
