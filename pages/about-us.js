import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "../Components/Footer";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="w-full font-parkson tracking-wide">
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
              ABOUT US
            </h1>
          </div>
        </div>
      </div>

      <div className=" h-[550px] lg:h-[600px] max-w-[1200px]  mx-auto mt-[100px] lg:mb-[200px] grid grid-cols-1 lg:grid-cols-2  mb-[50px]">
        <div className="h-[550px] lg:h-[600px] bg-primary shadow-xl">
          <div className="bg-[#f5f5f5] w-[140px] flex flex-col justify-center h-[40px] mt-[40px]">
            <h3 className="text-primary font-bold  text-center text-2xl">
              ABOUT US
            </h3>
          </div>
          <div className="mt-[40px] max-w-[500px] mx-auto font-semibold ">
            <p className="text-white text-lg sm:text-3xl px-2">
              Whether you're planning your next career move or need to fill a
              gap right away, we're devoted to working with you as an industry
              leader. Our recruiters provide crucial guidance and insights, as
              well as unmatched services and access to the best organisations
              and people. We'll support your skill development and assist you in
              navigating the new era of work as your long-term career partner.
            </p>
            <div className="bg-white w-[140px] mt-[30px] ">
              <h3 className="text-center  text-primary h-[40px] font-bold text-2xl">
                Learn More
              </h3>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block w-[500px]">
          <div className="relative max-w-[500px] sm:w-[640px] h-[500px]  lg:mt-[50px] mx-auto lg:mx-0 ">
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

      <div className=" grid grid-cols-2 xl:grid-cols-3 max-w-[1600px] mx-auto ">
        <div className=" col-span-2 flex flex-row py-[50px] border-b-4 border-secondary sm:border-white">
          <div className=" hidden sm:block">
            <svg
              viewBox="0 0 347 355"
              fill="none"
              xmlns="http://www.w3.org/2000/svg
            "
              className="w-[200px] lg:w-[300px] h-[200px]  lg:h-[300px] hidden sm:block"
            >
              <g clipPath="url(#clip0_60_4184)">
                <path
                  d="M292.395 302H54.6035L-0.271484 355.25V53.5C-0.271484 24.2125 24.4223 0.25 54.6035 0.25H292.395C322.576 0.25 347.27 24.2125 347.27 53.5V248.75C347.27 278.038 322.576 302 292.395 302Z"
                  fill="#496A7C"
                />
                <path
                  d="M155.209 124.5H191.792V222.125H155.209V124.5Z"
                  fill="white"
                />
                <path
                  d="M173.501 97.875C183.603 97.875 191.792 89.928 191.792 80.125C191.792 70.3219 183.603 62.375 173.501 62.375C163.398 62.375 155.209 70.3219 155.209 80.125C155.209 89.928 163.398 97.875 173.501 97.875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_4184">
                  <rect width="347" height="355" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="px-[20px] sm:px-[30px] lg:px-[40px] ">
            <div className="flex flex-col align-center ">
              <h2 className=" text-4xl font-bold text-primary text-center mb-[20px]">
                What is a recruitment agency ?
              </h2>
              <p className=" text-lg sm:text-base lg:text-xl xl:text-2xl">
                Recruitment organisations, often known as employment agencies,
                serve as a link between employers and job searchers. They work
                on behalf of employers to recruit qualified applicants to fill
                open positions. Many employers utilise them, and signing up can
                provide you access to positions that aren't advertised anywhere
                else.
              </p>
            </div>
          </div>
        </div>
        <div />
        <div />
        <div className=" col-span-2 flex flex-row py-[50px] border-b-4 border-secondary sm:border-white">
          <div className="px-[20px] sm:px-[30px] lg:px-[40px]">
            <div className="flex flex-col ">
              <h2 className=" text-4xl font-bold text-primary text-center mb-[20px]">
                HOW Do We Work ?
              </h2>
              <p className=" text-lg sm:text-base lg:text-xl xl:text-2xl">
                When a company needs to hire someone, it sends a job description
                to the staffing agency. The agency then utilises this
                description to search its database of CVs for candidates who
                match the job description. Alternatively, they may place a job
                advertisement on the internet to attract applicants before
                compiling a shortlist. From this selection, the company will
                choose its preferred applicants and ask the agency to schedule
                interviews.
              </p>
            </div>
          </div>
          <div className=" hidden sm:block">
            <svg
              viewBox="0 0 347 355"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[200px] lg:w-[300px] h-[200px]  lg:h-[300px] "
            >
              <g clipPath="url(#clip0_60_4184)">
                <path
                  d="M292.395 302H54.6035L-0.271484 355.25V53.5C-0.271484 24.2125 24.4223 0.25 54.6035 0.25H292.395C322.576 0.25 347.27 24.2125 347.27 53.5V248.75C347.27 278.038 322.576 302 292.395 302Z"
                  fill="#496A7C"
                />
                <path
                  d="M155.209 124.5H191.792V222.125H155.209V124.5Z"
                  fill="white"
                />
                <path
                  d="M173.501 97.875C183.603 97.875 191.792 89.928 191.792 80.125C191.792 70.3219 183.603 62.375 173.501 62.375C163.398 62.375 155.209 70.3219 155.209 80.125C155.209 89.928 163.398 97.875 173.501 97.875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_4184">
                  <rect width="347" height="355" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className=" col-span-2 flex flex-row py-[50px] ">
          <div className=" hidden sm:block">
            <svg
              viewBox="0 0 347 355"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[200px] lg:w-[300px] h-[200px]  lg:h-[300px]"
            >
              <g clipPath="url(#clip0_60_4184)">
                <path
                  d="M292.395 302H54.6035L-0.271484 355.25V53.5C-0.271484 24.2125 24.4223 0.25 54.6035 0.25H292.395C322.576 0.25 347.27 24.2125 347.27 53.5V248.75C347.27 278.038 322.576 302 292.395 302Z"
                  fill="#496A7C"
                />
                <path
                  d="M155.209 124.5H191.792V222.125H155.209V124.5Z"
                  fill="white"
                />
                <path
                  d="M173.501 97.875C183.603 97.875 191.792 89.928 191.792 80.125C191.792 70.3219 183.603 62.375 173.501 62.375C163.398 62.375 155.209 70.3219 155.209 80.125C155.209 89.928 163.398 97.875 173.501 97.875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_4184">
                  <rect width="347" height="355" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="px-[20px] sm:px-[30px] lg:px-[40px]">
            <div className="flex flex-col ">
              <h2 className=" text-4xl font-bold text-primary text-center mb-[20px] ">
                WHY USE US ?
              </h2>
              <p className=" text-lg sm:text-base lg:text-xl xl:text-2xl">
                There are numerous advantages to employing a recruiting service
                in addition to their core role of matching you to relevant
                positions. Specialist sector agencies, for example, have
                in-depth expertise of their industry and may advise you on the
                best strategies to break into a specific field. They're
                well-connected, so your CV can be submitted speculatively to a
                variety of employers in addition to being considered for open
                positions. Agencies may also assist you strengthen your CV and
                cover letter, as well as provide interview advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-2 text-center bg-primary py-[20px]">
        
        <div className=" ">
          <p className="text-white text-3xl pb-[20px]">NEED TO GET IN TOUCH?</p>
        </div>

        <div className="justify-around bg-secondary rounded-md object-bottom w-[150px] mx-auto h-[35px] hover:bg-white hover:text-secondary text-white text-2xl">
          <a href="/contact-us"> 
            <p>CONTACT US</p>
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}
