import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Charmed Recruitment</title>
        <meta name="description" content="We'll sort you a job, mate!" />
        <link rel="icon" href="/LogoCropped.png" />
      </Head>
      <Header />
      <div className=" w-full bg-primary">
        <div
          className="
          top-0 left-0 w-full h-[300px] flex flex-col justify-center shadow-xl"
        >
          <div className="max-w-[500px] mx-auto">
            <h1 className="text-white text-4xl font-semibold mb-[40px] p-6  text-center border-b-2 border-secondary">
              UPLOAD CV
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] border-[2px] py-[75px] sm:p-[75px] border-secondary bg-primary mx-auto my-[75px] relative">
        <div className="my-auto p-[50px]  border-[2px] border-secondary ">
          <form
            className="flex flex-col"
            name="CVform"
            method="POST"
            action="/success"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="inquiryForm" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="">
              <div className=" ">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="NAME *"
                  required
                ></input>
              </div>
              <div className="col-span-full md:col-span-3">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="EMAIL *"
                  required
                ></input>
              </div>
              <div className="col-span-full md:col-span-3">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Notes"
                  type="text"
                  name="notes"
                  placeholder="NOTES OR COMMENTS"
                  required
                ></input>
              </div>

              <div className="col-span-full">
                <input
                  className="placeholder-primary bg-white  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Upload"
                  type="file"
                  placeholder="UPLOAD YOUR CV"
                  name="addressLn1"
                  required
                ></input>
              </div>

              <div className="w-[100%] ">
                <button
                  className="bg-secondary text-white font-overpass py-2  w-[100px] mx-auto    border-white hover:bg-secondary"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="absolute max-w-[1200px] left-[20px] sm:left-[90px] top-[51px]">
          <div className="p-[10px] bg-primary ">
            <h2 className="text-white font-semibold text-xl">YOUR DETAILS</h2>
          </div>
        </div>
      </div>

      <div className=" bg-primary w-[100%] py-[75px] ">
        <div className="flex flex-col mx-auto w-[300px] justify-center gap-4">
          <h1 className="text-white font-semibold text-center font-parkson text-3xl">
            WHAT ARE YOU SEARCHING FOR?
          </h1>
          <div className="flex flex-row">
            <input
              className="border-b-0 p-[5px] text-xl h-[50px] appearance-none mb-2 w-[400px]"
              type="text"
              placeholder="   JOB TITLE"
            />
          </div>
          <div className="flex flex-row">
            <input
              className="border-b-0 text-xl h-[50px] appearance-none mb-2 w-[400px]"
              type="text"
              placeholder="   LOCATION"
            />
          </div>
          <div className="flex flex-row justify-end">
            <div className="bg-secondary w-[100px]">
              <p className="font-parkson text-2xl text-white text-center">
                Search
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
