import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=''>
      <Navbar/>
      <div>
        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-l from-teal-400 to-blue-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Join our FREE open beta today!</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-indigo-200">
                    A beautifully crafted open-source waitlist management system, hosted in the cloud – free for our super early birds.
                  </p>
                  <a
                    href="#"
                    className="mt-8 mr-4 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium hover:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
              <div className="relative pb-3/5 -mt-6 md:pb-1/2">
                <img
                  className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src="/screenshot.png"
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
