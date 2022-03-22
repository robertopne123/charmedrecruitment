import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "../Components/Footer";
import { Header } from "../components/header";
import { JobCard } from "../components/jobcard";

export default function Home() {
  return (
    <div className="w-full font-parkson">
      <Head>
        <title>Charmed Recruitment</title>
        <meta name="description" content="Charmed Recruitment" />
        <link rel="icon" href="/LogoCropped.png" />
      </Head>
      <Header />
      <div className="relative w-full">
        <div className="relative w-full h-[600px]">
          <Image
            src="/hero.png"
            alt="Nightclub image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div
          className="
         absolute top-0 left-0 w-full h-[600px] flex flex-col justify-center shadow-xl"
        >
          <div className="mx-auto">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-white font-semibold text-center font-parkson text-3xl">
                Sign Up For Job Update
              </h1>

              <div className="flex flex-row justify-center">
                <Link href="#indexForm">
                  <div className=" flex flex-row w-full justify-center">
                    <button className="hover:bg-white font-parkson hover:text-secondary rounded-md bg-secondary text-white py-2  w-[100px] border-white tracking-wider text-xl">
                      Click here
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary max-w-[1200px]  mx-auto mt-[100px] mb-[200px] grid grid-cols-1 lg:grid-cols-2 shadow-xl">
        <div className=" mb-[40px]">
          <div className="bg-[#f5f5f5] flex flex-col justify-center h-[40px] mt-[40px]">
            <h3 className="text-primary font-bold mx-auto text-center text-3xl leading-[40px] font-parkson inline">
              ABOUT
            </h3>
          </div>
          <div className="mt-[40px] px-[15px] sm:px-10 mx-auto font-semibold ">
            <p className="text-white text-lg sm:text-3xl font-parkson">
              Whether you're planning your next career move or need to fill a
              gap right away, we're devoted to working with you as an industry
              leader. Our recruiters provide crucial guidance and insights, as
              well as unmatched services and access to the best organisations
              and people. We'll support your skill development and assist you in
              navigating the new era of work as your long-term career partner.
            </p>
            <div className="bg-white w-[140px] mt-[30px] ">
              <Link href="/about-us">
                <a>
                  <h3 className="text-center text-primary h-[40px] font-parkson font-bold leading-[40px] text-2xl">
                    Learn More
                  </h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[100%] mx-auto">
          <div className="bg-primary relative max-w-[510px] hidden lg:block sm:w-[640px] h-[600px]  sm:mx-auto  ">
            <Image
              src="/laptopguy.png"
              alt="laptop Guy"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
              priority
            />
          </div>
        </div>
      </div>
      {/* trending jobs */}

      {/* <div className="bg-primary w-full">
        <div className=" ">
          <h2 className="text-center font-bold text-white text-4xl font-parkson w-[100%]">
            TRENDING JOBS
          </h2>
        </div>
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10">
          <div className="">
            <JobCard image="/laptopguy.png" name="laptopguy" />
          </div>
          <div className="">
            <JobCard image="/laptopguy.png" name="laptopguy" />
          </div>
          <div className="">
            <JobCard image="/laptopguy.png" name="laptopguy" />
          </div>
        </div>
      </div> */}

      <div className="grid gird-cols-1 pb-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[40px] max-w-[1250px] mx-auto">
        <div className="col-span-full">
          <h2 className="text-center text-primary font-parkson font-bold text-7xl w-[100%] ">
            INDUSTRIES
          </h2>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              Automotive
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              Engineering
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              Manufacturing
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              Construction
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              {"Accounting & Finance"}
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              {"Digital"}
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              {"Information Technology"}
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              SALES
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              ADMIN
            </h2>
          </div>
        </div>
      </div>

      <div className="py-[1px]" id="indexForm"/>
      <div
        
        className="max-w-[1200px] border-[2px] py-[75px] sm:p-[75px] border-secondary bg-primary mx-auto my-[75px] relative"
      >
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
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-7 font-parkson tracking-wider text-lg">
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
        <div className="absolute max-w-[1200px] left-[20px] sm:left-[90px] top-[48px]">
          <div className="p-[10px] bg-primary ">
            <h2 className="text-white font-semibold text-3xl">
              Sign up for mailing list
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
