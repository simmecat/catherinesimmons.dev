import type { AppProps } from "next/app";

import { NextUIProvider, createTheme } from "@nextui-org/react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";

import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const lightTheme = createTheme({
    type: "light",
  });
  const darkTheme = createTheme({
    type: "dark",
  });

  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
