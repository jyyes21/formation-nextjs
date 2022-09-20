import React from "react";

const Menu = () => {
  return (
    <div className="sticky top-0">
      <div className="sticky top-0">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Info</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="https://erikterwan.com/" target="_blank">
                <li>Show me more</li>
              </a>
            </ul>
          </div>
        </nav>
        <button className="text-black font-semibold inline-flex float-left pt-14 pl-20 text-2xl">
          <img
            src="http://core.loopthemes.com/wp-content/uploads/2016/03/core_logo.png"
            className="h-5 aspect-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default Menu;

{
  /* <button className="text-black font-semibold inline-flex float-right pt-14 pr-20 text-2xl">
<div className="space-y-2">
  <span className="block w-8 h-0.5 bg-black"></span>
  <span className="block w-8 h-0.5 bg-black"></span>
  <span className="block w-5 h-0.5 bg-black"></span>
</div>
</button> */
}
