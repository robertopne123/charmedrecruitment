import Head from "next/head";
import Image from "next/image";
<<<<<<< HEAD
import  Footer  from "../Components/Footer";
=======
import Footer from "../Components/Footer";
>>>>>>> 177f1acbf3c3c7c32340cc1bf425e16705714754
import { Header } from "../components/header";
import { JobCard } from "../components/jobcard";
import { Footer } from "../components/Footer";
// import styles from "../styles/Home.module.css";

// import { RNavbar } from "../components/navbar.js";

// import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Charmed Recruitment</title>
        <meta name="description" content="We'll sort you a job, mate!" />
        <link rel="icon" href="/Logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass"
          rel="stylesheet"
        />
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
                WHAT ARE YOU SEARCHING FOR?
              </h1>
              <div className="flex flex-row">
                <input
                  className="border-b-0 text-xl h-[50px] appearance-none mb-2 w-[400px]"
                  type="text"
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
        </div>
      </div>

      <div className="bg-primary h-[1200px] lg:h-[600px] max-w-[1200px]  mx-auto mt-[100px] mb-[200px] grid grid-cols-1 lg:grid-cols-2 shadow-xl">
        <div className="h-[600px]">
          <div className="bg-[#f5f5f5] flex flex-col justify-center h-[40px] mt-[40px]">
            <h3 className="text-primary font-bold mx-auto text-center text-3xl leading-[40px] font-parkson inline">
              ABOUT
            </h3>
          </div>
          <div className="mt-[40px] px-10 mx-auto font-semibold ">
            <p className="text-white text-lg sm:text-3xl font-parkson">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              ipsum, feugiat at mi eget, varius vulputate nisi. Cras commodo
              nulla et dui tincidunt, ut mattis augue aliquam. Phasellus lorem
              lacus, laoreet sed lacinia non, eleifend eu ligula. Sed sodales
              eros non purus placerat, nec imperdiet tellus commodo. In hac
              habitasse platea dictumst. Aliquam aliquam sit amet ante eget
              iaculis. Phasellus suscipit pulvinar justo luctus accumsan. Sed
              consequat sodales ante.
            </p>
            <div className="bg-white w-[140px] mt-[30px] ">
              <h3 className="text-center text-primary h-[40px] font-parkson font-bold leading-[40px] text-2xl">
                Learn More
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[100%] mx-auto">
          <div className="bg-primary relative max-w-[640px] sm:w-[640px] h-[600px]  sm:mx-auto  ">
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
      <div className="bg-primary w-full">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          <div className="col-span-3 ">
            <h2 className="text-center font-bold text-white text-4xl font-parkson w-[100%]">
              TRENDING JOBS
            </h2>
          </div>
          <div className="">
            <JobCard image="/laptopguy.png" name="laptopguy" />
          </div>
          <div className="">
            {" "}
            <JobCard image="/laptopguy.png" name="laptopguy" />
          </div>
          <div className="">
            {" "}
            <JobCard image="/laptopguy.png" name="laptopguy" />
          </div>
          <div className="col-span-3 "></div>
        </div>
      </div>
      <div className="w-full py-10">
        <div className="grid grid-cols-3 gap-y-[40px] max-w-[1250px] mx-auto">
          <div className="col-span-3">
            <h2 className="text-center text-primary font-parkson font-bold text-4xl w-[100%] ">
              Jobs
            </h2>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
          <div className="mx-[60px]">
            <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
              <h2 className="text-center py-[30px] text-3xl ">JOINERY</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
