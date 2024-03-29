import Head from "next/head";
import type { NextPage } from "next";
import Menu from "./components/Menu";
import Text from "./components/Text";
import Nav from "./components/Nav";
import Images from "./components/Images";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <div className="bg-neutral-200 px-5 pt-32 pb-32 flex justify-center">
        <div className="text-black bg-gray-100 max-w-7xl w-5/6 flex flex-col ">
          <Menu />
          <Text />
          <Nav />
          <Images />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
