import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="inline-flex w-full pt-14 pl-20 pb-10 text-gray-400">
          <div className="basis-full">
            <div className="text-xs pb-3 text-black">COPYRIGHT</div>
            <div className="text-xs">
              2016 © LOOP Themes <br />
              All rights reserved
            </div>
          </div>

          <div className=" basis-full">
            <div className="text-xs pb-3 text-black">PAGES</div>

            <div>
              <ul className="text-xs">
                <li>
                  <button className="pr-4">Home</button>
                  <button>Title + Filters</button>
                </li>
                <li>
                  <button className="pr-4">Blog + Filters</button>
                  <button>Blog Archive</button>
                </li>
              </ul>
            </div>
          </div>
        <div className=" basis-full">
          <div className="text-xs pb-3 text-black">CONTACT</div>
          <div className="text-xs pb-1">
            <button className="pr-2">lOGO</button> <button className="pr-2">Logo</button> <button className="pr-2">logo</button> <button className="pr-2">Logo</button> <button>Logo</button>
          </div>
          <div className="text-xs">London, United Kingdom</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
