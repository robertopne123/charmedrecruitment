import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import Link from "next/link";

export default function JobSearch() {
  return (
    <div className="w-full font-parkson tracking-wide">
      <Head>
        <title>Charmed Recruitment</title>
        <meta
          name="description"
          content="Your business is important to you and protecting it should be simple. At Deltic Insurance, we want to help you get the right cover to make sure your business is protected."
        />
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
              Contact us
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] border-[2px] py-[75px] sm:p-[75px] border-secondary bg-primary mx-auto my-[75px] relative">
        <div className="my-auto p-[24px] sm:p-[50px]  border-[2px] border-secondary ">
          <form
            className="flex flex-col"
            name="Contactform"
            method="POST"
            action="/"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="inquiryForm" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-7 font-parkson tracking-wider text-lg">
              <div className=" ">
                <input
                  className="placeholder-primary w-full uppercase appearance-none border mb-2 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME"
                ></input>
              </div>
              <div className=" ">
                <input
                  className="placeholder-primary uppercase w-full appearance-none border mb-2 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className=" ">
                <input
                  className="placeholder-primary uppercase appearance-none border mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email*"
                  required
                ></input>
              </div>
              <div className=" ">
                <input
                  className="placeholder-primary uppercase appearance-none border mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Notes"
                  type="email"
                  name="notes"
                  placeholder="Repeat Email*"
                  required
                ></input>
              </div>

              <div className="col-span-full">
                <input
                  className="placeholder-primary bg-white appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone Number*"
                  name="phoneNumber"
                  required
                ></input>
              </div>

              <div className="col-span-full ">
                <textarea
                  className="placeholder-primary bg-white appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  type="text"
                  placeholder="Message*"
                  name="message"
                  row="3"
                  required
                ></textarea>
              </div>
            </div>
            <div className=" flex flex-row w-full justify-end">
              <button
                className="hover:bg-white font-parkson hover:text-secondary rounded-md bg-secondary text-white py-2  w-[100px] border-white tracking-wider text-xl"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="absolute max-w-[1200px] left-[20px] sm:left-[90px] top-[47px]">
          <div className="p-[10px] bg-primary ">
            <h2 className="text-white font-semibold text-3xl">YOUR DETAILS</h2>
          </div>
        </div>
      </div>

      {/* bottom blue bit */}

      {/* <div className="text-white text-3xl font-parkson text-center  bg-primary py-[30px]  ">
        <h2 className="py-[30px]">Want to discuss your recruitment needs?</h2>
        <div>
          <Link href="/contact-us">
            <a className="h-full hover:text-secondary">
              <div className="   bg-secondary rounded-md  w-[150px] mx-auto place-content-center hover:bg-white">
                <p className="text-xl tracking-wide p-[7px]">Get Employed</p>
              </div>
            </a>
        </Link>
          </div>
        <div />
      </div> */}

      <Footer />
    </div>
  );
}
