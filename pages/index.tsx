import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-200">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <div className="bg-zinc-600 flex justify-start">
      <button className="">
        <p className="text-white font-sans pl-5 pt-4 pb-4 pr-5 bg-zinc-800">
          L O O P
        </p>
        </button>
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
              <ul className="rounded-b dropdown-menu absolute hidden text-gray-700 bg-gray-400 w-48">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap mb-px"
                    href="#"
                  >
                    Module
                    <p className="float-right rounded-full text-sm bg-black text-white pt-1 pb-1 pr-2 pl-2">59$</p>
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap mb-px"
                    href="#"
                  >
                    Quartz
                    <p className="float-right rounded-full text-sm bg-black text-white pt-1 pb-1 pr-2 pl-2">59$</p>
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap mb-px"
                    href="#"
                  >
                    Core
                    <p className="float-right rounded-full text-sm bg-black text-white pt-1 pb-1 pr-2 pl-2">59$</p>
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Andy Parker
                    <p className="float-right rounded-full text-sm bg-black text-white pt-1 pb-1 pr-2 pl-2">59$</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white font-sans  pl-5 pt-2.5 pb-3 bg-zinc-800 ml-px flex-auto">
          <button className="float-right mr-5 text-white bg-zinc-600 font-semibold py-1 px-4 rounded hover:bg-zinc-500 shadow-md shadow-black/100 ">
            Install / Customize
          </button>
        </div>
        <div className="text-white font-sans  pl-5 pt-2.5 pb-3 pr-5 bg-zinc-800 ml-px w-34">
          <button className="text-white bg-green-500 font-semibold py-1 px-4 rounded inline-flex items-center hover:bg-green-600 shadow-md shadow-green-900/100">
            Buy now
          </button>
        </div>
        <div className="text-white font-sans  pl-2 pt-2.5 pb-3 pr-2 bg-zinc-800 ml-px">
          <button className="text-white font-semibold py-1 px-4 rounded inline-flex items-center">
            x
          </button>
        </div>
      </div>
      <div className="bg-neutral-200 w-auto h-screen p10 block px-56">
        <div>
          <div className="text-black bg-gray-100 ml-10 mr-14 mt-10 mb-14 h-screen flex-col">
            <div className="bg-black">
              <button className="text-black font-semibold rounded inline-flex float-right pt-14 pr-10 text-2xl">
                MENU
              </button>
              <button className="text-black font-semibold rounded inline-flex float-left pt-14 pl-10 text-2xl">
                C O R E
              </button>
            </div>
            <div className="pt-80">
              <p className="text-3xl font-serif pl-10">
                We make the complex simple.
              </p>
              <p className="text-3xl font-serif pt-8 pl-10 text-yellow-600">
                We make the complex simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
