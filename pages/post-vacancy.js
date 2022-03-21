import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="w-full font-parkson">
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
              POST VACANCY
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] border-[2px] py-[75px] sm:p-[75px] border-secondary bg-primary mx-auto my-[75px] relative">
        <form
          className="flex flex-col"
          name="CVform"
          method="POST"
          action="/"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <div className="my-auto p-[50px]  border-[2px] border-secondary ">
            <input type="hidden" name="form-name" value="inquiryForm" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="">
              <div className="col-span-full">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="NAME *"
                  required
                ></input>
              </div>
              <div className="col-span-full">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="EMAIL *"
                  required
                ></input>
              </div>
              <div className="col-span-full">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  name="contact number"
                  placeholder="CONTACT NUMBER"
                  required
                ></input>
              </div>

              <div className="col-span-full">
                <input
                  className="placeholder-primary bg-white  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Upload"
                  type="text"
                  placeholder="EMAIL"
                  name="email"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="my-auto p-[50px] mt-[50px]  border-[2px] border-secondary ">
            <div className="">
              <div className=" ">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="job title"
                  type="text"
                  name="jobtitle"
                  placeholder="JOB TITLE"
                  required
                ></input>
              </div>
              <div className="col-span-full md:col-span-3">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  name="location"
                  placeholder="LOCATION"
                  required
                ></input>
              </div>
              <div className="col-span-full md:col-span-3">
                <input
                  className="placeholder-primary  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="SALARY"
                  type="text"
                  name="salary"
                  placeholder="SALARY"
                  required
                ></input>
              </div>

              <div className="col-span-full">
                <textarea
                  className="placeholder-primary bg-white  appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Upload"
                  type="textarea"
                  placeholder="VACANCY"
                  name="addressLn1"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-[10px]">
            <button
              className="bg-secondary text-white font-overpass py-2  w-[100px] mx-auto    border-white hover:bg-secondary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="absolute max-w-[1200px] left-[20px] sm:left-[90px] top-[51px]">
          <div className="p-[10px] bg-primary ">
            <h2 className="text-white font-semibold text-xl">ABOUT YOU</h2>
          </div>
        </div>
        <div className="absolute max-w-[1200px] left-[20px] sm:left-[90px] top-[389px]">
          <div className="p-[10px] bg-primary ">
            <h2 className="text-white font-semibold text-xl">
              VACANCY DETAILS
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
