import Head from "next/head";

import { ReactNode } from "react";

import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row justify-center">
      <Head>
        <title>Catherine Simmons</title>
      </Head>
      <div className="flex-grow max-w-4xl px-4 py-2">
        <Header />
        {/* <NavBar /> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
