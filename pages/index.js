import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../components/header";
import { JobCard } from "../components/jobcard";
// import styles from "../styles/Home.module.css";

// import { RNavbar } from "../components/navbar.js";

// import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Charmed Recruitment</title>
        <meta
          name="description"
          content="We'll sort you a job, mate!"
        />
        <link rel="icon" href="/Logo.png"/>
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
         absolute top-0 left-0 w-full h-[600px] flex flex-col justify-center "
        >
          <div className="max-w-[500px] mx-auto">
            <h1 className="text-white font-semibold mb-[40px]  text-center">
              WHAT ARE YOU SEARCHING FOR?
            </h1>
            <div className="flex flex-row ">
              <input
                className="border-b-0  text-xl -black h-[50px] max-w-[400px] appearance-none mb-2    "
                type="text"
              />
              <div className="bg-white h-[50px]  p-[10px] ">
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                    fill="#37515F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary h-[1200px] lg:h-[600px] max-w-[1200px]  mx-auto mt-[100px] mb-[200px] grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[600px]">
          <div className="bg-[#f5f5f5] w-[100px] flex flex-col justify-center h-[40px] mt-[40px]">
            <h3 className="text-primary font-bold mx-auto text-center text-2xl">
              ABOUT
            </h3>
          </div>
          <div className="mt-[40px] max-w-[500px] mx-auto font-semibold ">
            <p className="text-white text-lg sm:text-xl px-2">
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
              <h3 className="text-center  text-primary h-[40px] font-bold text-2xl">
                Learn More
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[100%] mx-auto">
          <div className="relative max-w-[640px] sm:w-[640px] h-[600px]  sm:mx-auto  ">
            <Image
              src="/laptopguy.png"
              alt="laptop Guy"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[550px] bg-primary grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-3 ">
          <h2 className="text-center font-bold text-white text-4xl w-[100%] mt-[30px]">
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
      <div className="grid grid-cols-3 gap-y-[40px]">
        <div className="col-span-3">
          <h2 className="text-center text-primary font-bold text-4xl w-[100%] mt-[30px] mb-[60px]">
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
  );
}
