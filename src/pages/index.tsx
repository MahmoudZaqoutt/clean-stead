import { useRouter } from "next/router";
import { useEffect } from "react";
import Home from "./home";
import About from "./about";
import ContactUs from "./contact-us";
import Service from "./service";
import Book from "./book";
export default function Home1() {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/login-admin");
  // }, []);
  return <Book />;
}
