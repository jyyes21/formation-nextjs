import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <div className="bg-zinc-600 flex justify-start">
        <p className="text-white font-sans  pl-5 pt-4 pb-3 pr-5 bg-zinc-800">L O O P</p>
        <div className="relative inline-block text-left">
          <div className="pl-5 pt-2.5 pb-3 pr-5 bg-zinc-800 ml-px">
            <div className="dropdown inline-block relative">
              <button className="text-white bg-zinc-600 font-semibold py-1 px-4 rounded inline-flex items-center">
                <span className="mr-28">Core</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Module
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Quartz
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Core
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Andy Parker
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white font-sans  pl-5 pt-2.5 pb-3 bg-zinc-800 ml-px flex-auto">
          <button className="float-right mr-5 text-white bg-zinc-600 font-semibold py-1 px-4 rounded ">
            Install / Customize
          </button>
        </div>
        <div className="text-white font-sans  pl-5 pt-2.5 pb-3 pr-5 bg-zinc-800 ml-px w-34">
          <button className="text-white bg-zinc-600 font-semibold py-1 px-4 rounded inline-flex items-center">
            Buy now
          </button>
        </div>
        <div className="text-white font-sans  pl- pt-2.5 pb-3 pr-2 bg-zinc-800 ml-px">
          <button className="text-white font-semibold py-1 px-4 rounded inline-flex items-center">
          x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
