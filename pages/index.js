import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import Embed from 'react-runkit';

const snippet = `const fetch = require('node-fetch');

const data = {
  email: "your@email.com", // The user's email
  waitlist: "eb4aee89-b54c-4446-a3fb-b4990ebe2d9c" // Your waitlist's UUID
};

fetch("https://app.getawait.com/api/v1/subscribers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .catch((error) => console.log(error))
  .then((data) => console.log(data));`;

export default function Home() {
  return (
    <div className='w-full min-w-full'>
      <Head>
        <script src="https://embed.runkit.com" />
        <title>Await</title>
      </Head>
      <Navbar/>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
          <div className="lg:text-center mb-8">
            <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
              A beautiful REST API
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Built for <span className="text-fill-color-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">developers</span>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Building a waitlist for your next product launch shouldn&apos;t be hard, and a flexible, low-level waitlist management system is all you need
            </p>
          </div>

          <div className='w-full relative'>
            <Embed source={ snippet } />
          </div>
        </div>
      </div>

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
                    href="https://app.getawait.com"
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

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? <a href="mailto:balazs@otakomaiya.com" className="font-medium text-indigo-600 hover:text-indigo-500">Shoot me an email directly!</a> Always happy to help.</p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What&apos;s the story being Await?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    As I was working on a startup concept of mine, I really wanted to start advertising before the app was actually finished. I thought, how cool would it be if people could sign up to a waitlist? This would allow me to incrementally start onboarding users, and gauge initial interest.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Okay, but what the hell is Await?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Await solved the problem outlined above – it&apos;s a simple waitlist management system. With just <b>two</b> API endpoints, and an easy-to-use UI, creating your own waitlist really becomes a breeze.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Open-source? Can I contribute?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Of course, I&apos;d love that! The app is a beautiful monolith, that uses Laravel, Vue & Tailwind – contributions are more than welcome :).
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What&apos;s the future of Await?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    My experience with building startups is limited – I&apos;m a one man-show, and no serial entrepreneur by any measure. I need your feedback. I&apos;ve no clue what the future holds, but whatever it may be, let&apos;s nail it. <b>Together.</b>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
