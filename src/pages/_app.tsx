import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;
  const homePath = ["home", ""];
  const dashborad = ["dashborad"];
  const isAuth = homePath.includes(path.split("/").pop() || "");
  const isDashboradPath = dashborad.includes(path.split("/").pop() || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      <div>
        {isLoading && (
          <LinearProgress className="!h-[2px]" variant="indeterminate" />
        )}
      </div>

      <Head>
        <title>Clean Stead</title>
      </Head>
      <Header isAuthorized={isAuth} isDashboradPath={isDashboradPath} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer isDashboradPath={isDashboradPath} />
    </>
  );
}
