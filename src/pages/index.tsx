import { useRouter } from "next/router";
import { useEffect } from "react";
import Home from "./home";
export default function Home1() {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/login-admin");
  // }, []);
  return <Home />;
}
