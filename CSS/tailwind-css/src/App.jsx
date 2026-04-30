import React from "react";
import bmw from "./assets/bmw.png";
import book from "./assets/book.png";
import student from "./assets/graduate.png";
import card from "./assets/card.png";
import computer from "./assets/computer.png";

function Card() {
  return (
    <>
      <div className="mx-auto ">
        <div className="bg-white p-4 max-w-sm rounded-md shadow-lg">
          <div className="rounded-md overflow-hidden">
            <img
              className="p-3 rounded-2xl"
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/buy/geforce-ada-40-series-og-1200x630@2x.jpg"
              alt=""
            />
          </div>
          <div className="p-3">
            <div className="font-medium text-2xl text-black">
              NVIDIA GeForce RTX 4090
            </div>
            <p className="mt-2 text-xl text-slate-600">
              Experience lifelike virtual worlds and AI-accelerated frame rates
              with the Ada Lovelace architecture.
            </p>
            <button className="bg-[#76B900] text-center w-full hover:bg-[#5e9400] text-black  mt-6 py-3 rounded-lg text-xl font-medium">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Basic() {
  return (
    <>
      <div>
        <h2 className="text-white text-4xl m-6">App</h2>
        <div className="">
          <div
            className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl
          flex items-center space-x-4
          "
          >
            <div>
              <img className="h-12" src={bmw} alt="" />
            </div>
            <div className="text-xl font-medium">
              <div className="text-black text-2xl">Tailwind CSS</div>
              <p className="text-slate-500">By Harsh Dhiman</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ResponsiveCard() {
  return (
    <>
      <div className="">
        <div className="bg-white mx-auto max-w-xl md:flex rounded-lg overflow-hidden">
          <div className="h-60">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/28408505/pexels-photo-28408505.jpeg"
              alt=""
            />
          </div>
          <div className="p-4">
            <div className="font-medium text-xl mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio earum harum quam facere odit officia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function PWHomePage() {
  return (
    <>
      <div className="h-full w-full">
        {/* nav section */}
        <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-44">
          <div className="text-2xl font-bold text-indigo-700">PW Skills</div>
          <ul className="font-semibold md:flex hidden">
            <li className="md:mx-[10px] cursor-pointer">Home</li>
            <li className="md:mx-[10px] cursor-pointer">About Us</li>
            <li className="md:mx-[10px] cursor-pointer">Contact Us</li>
          </ul>
          <div className="hidden md:block bg-indigo-700 px-2 py-2 text-white font-bold cursor-pointer rounded-md">
            Login/SignUp
          </div>
          <div className="md:hidden">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="w-full h-auto">
          <img
            className="hidden md:block w-full"
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
            alt=""
          />
          <img
            className="md:hidden w-full"
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
            alt=""
          />
        </header>

        {/* Our Students Section */}
        

        {/* Product Section */}
        <div className="h-auto w-100 flex flex-wrap flex-col p-10 items-center text-center mt-20">
          <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-indigo-800 text-3xl font-bold md:text-4xl text-center">
              Our Products
            </p>
            <div className="border-b-4 w-36 h-1 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
          </div>
          <div className="w-[90%] h-auto flex flex-wrap justify-around">
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
              <a
                href="https://www.flaticon.com/free-icons/computer"
                title="computer icons"
              >
                <img src={computer} alt="Computer Image" />
              </a>
              <p className="text-3xl text-white font-bold">PW Skills lab</p>
              <p className="text-2xl text-gray-500 font-medium">
                supercharge your project development with our robust lab.
              </p>
            </div>
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
              <a
                href="https://www.flaticon.com/free-icons/computer"
                title="computer icons"
              >
                <img src={computer} alt="Computer Image" />
              </a>
              <p className="text-3xl text-white font-bold">PW Skills lab</p>
              <p className="text-2xl text-gray-500 font-medium">
                supercharge your project development with our robust lab.
              </p>
            </div>
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
              <a
                href="https://www.flaticon.com/free-icons/computer"
                title="computer icons"
              >
                <img src={computer} alt="Computer Image" />
              </a>
              <p className="text-3xl text-white font-bold">PW Skills lab</p>
              <p className="text-2xl text-gray-500 font-medium">
                supercharge your project development with our robust lab.
              </p>
            </div>
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4 mx-8">
              <a
                href="https://www.flaticon.com/free-icons/computer"
                title="computer icons"
              >
                <img src={computer} alt="Computer Image" />
              </a>
              <p className="text-3xl text-white font-bold">PW Skills lab</p>
              <p className="text-2xl text-gray-500 font-medium">
                supercharge your project development with our robust lab.
              </p>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex-col md:flex-row justify-between md:px-12 ">
          <div>
            <img src="" alt="" />
            <p>Email us: support@pwskills.com</p>
            <img src="" alt="" />
          </div>
        </footer>
      </div>
    </>
  );
}

function App() {
  return <PWHomePage />;
}

export default App;
