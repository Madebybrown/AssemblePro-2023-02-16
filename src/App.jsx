// Dependencies
import React from "react";
import Logo from "./assets/images/Logo.png";
import Cables from "./assets/images/Cables.PNG";
import Laser from "./assets/images/Laser.PNG";
import Machinery from "./assets/images/Machinery.PNG";
import MotorColor from "./assets/images/MotorColor.PNG";
import Printing from "./assets/images/Printing.PNG";
import Rework from "./assets/images/Rework.PNG";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Logo and Navbar items */}
      <header className="h-16 bg-gray-200 flex justify-center items-center">
        <div className="flex justify-between items-center px-8 w-full">
          <div>
            <a href="/">
              <img src={Logo} alt="Jensen Logo" className="h-10 select-none" />
            </a>
          </div>

          <div>
            <nav>
              <ul className="flex text-lg uppercase">
                <li>
                  <a href="/" className="hover:font-bold duration-300 m-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:font-bold duration-300 m-2">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mb-auto flex-grow bg-white">
        <div className="grid grid-cols-5 grid-rows-6 gap-6 p-8 h-full">
          {/* Product grid */}
          <div className="grid grid-cols-2 grid-rows-3 gap-6 col-span-2 row-span-6 h-full">
            <div className="bg-gray-300 flex justify-center shadow-lg items-center p-4">
              <div className="bg-white w-full h-full">
                <img
                  src={Cables}
                  alt="Cables"
                  className="h-full cursor-pointer"
                />
              </div>
            </div>
            <div className="bg-gray-300 flex justify-center shadow-lg items-center p-4">
              <div className="bg-white w-full h-full">
                <img
                  src={Laser}
                  alt="Laser"
                  className="h-full cursor-pointer"
                />
              </div>
            </div>
            <div className="bg-gray-300 flex justify-center shadow-lg items-center p-4">
              <div className="bg-white w-full h-full">
                <img
                  src={Machinery}
                  alt="Machinery"
                  className="h-full cursor-pointer"
                />
              </div>
            </div>
            <div className="bg-gray-300 flex justify-center shadow-lg items-center p-4">
              <div className="bg-white w-full h-full">
                <img
                  src={MotorColor}
                  alt="Motor Color"
                  className="h-full cursor-pointer"
                />
              </div>
            </div>
            <div className="bg-gray-300 flex justify-center shadow-lg items-center p-4">
              <div className="bg-white w-full h-full">
                <img
                  src={Printing}
                  alt="Printing"
                  className="h-full cursor-pointer"
                />
              </div>
            </div>
            <div className="bg-gray-300 flex justify-center shadow-lg items-center p-4">
              <div className="bg-white w-full h-full">
                <img
                  src={Rework}
                  alt="Rework"
                  className="h-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Image + video montage */}
          <div className="bg-gray-300 col-span-3 row-span-3 shadow-lg">
            <div className="w-full"></div>
          </div>

          {/* App Description */}
          <div className="col-span-3 row-span-3">
            <div className="w-full flex justify-center flex-col text-center p-10 h-full select-none">
              <h1 className="font-bold mb-2 text-black uppercase text-5xl">
                Assemble<span className="font-thin text-blue-500">Pro</span>
              </h1>
              <p>
                A productivity app that helps users streamline their workflow
                and optimize their time management through customizable task
                lists, including images, videos and projects management
                features.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer and social links */}
      <footer className="h-12 bg-gray-200 flex justify-center">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600">
            2023 copyright | all rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
