import React from "react";
import myImage from "../src/undraw_career_progress_ivdb.svg"

const Main = () => {
  return (
    <>
      <header className="w-full bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter text-gray-900">
            landthatjob.tech
          </h1>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#2A88D0] to-[#689cc3] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 :bg-gray-50 :text-gray-900 :hover:bg-gray-50/90 :focus-visible:ring-gray-300"
            href="https://5pt3xyrc1kx.typeform.com/to/a6DtWH9L"
          >
            Join the waitlist
          </a>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#78b9ea] lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src={myImage}
              alt="Hero"
              className="mx-auto aspect-video object-fill overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />  
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl text-[#2A88D0] font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-powered career tools
                </h1>
                <p className="max-w-[600px] text-gray-600 text-justify md:text-xl :text-gray-400">
                  The only AI toolkit you need to land that dream job. Create resumes,
                  cover letters, get resume scores, and grow your
                  professional network.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#2A88D0] to-[#689cc3] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 :bg-gray-50 :text-gray-900 :hover:bg-gray-50/90 :focus-visible:ring-gray-300"
                  href="https://5pt3xyrc1kx.typeform.com/to/a6DtWH9L"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12  md:py-24 lg:py-32">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm :bg-gray-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What we offer
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed :text-gray-400">
                Our AI-powered tools are designed to give you a competitive edge
                in your career journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Resume Generator</h3>
              <p className="text-sm text-gray-500 :text-gray-400">
                Create professional resumes tailored to your career goals.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Cover Letter Generator</h3>
              <p className="text-sm text-gray-500 :text-gray-400">
                Craft compelling cover letters that stand out.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Resume Score</h3>
              <p className="text-sm text-gray-500 :text-gray-400">
                Get instant feedback on your resume and improve it.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">And more features</h3>
              <p className="text-sm text-gray-500 :text-gray-400">
                Ample new features upcoming.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#2A88D0] py-6 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">landthatjob.tech</h2>
            <p className="text-sm">© 2024 landthatjob. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a className="text-sm hover:underline" href="#">
              About Us
            </a>
            <a className="text-sm hover:underline" href="#">
              Contact Us
            </a>
            <a className="text-sm hover:underline" href="#">
              Follow us on X
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
