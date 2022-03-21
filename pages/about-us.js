import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "../Components/Footer";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="w-full font-parkson">
      <Head>
        <title>Charmed Recruitment</title>
        <meta name="description" content="We'll sort you a job, mate!" />
        <link rel="icon" href="/Logo.png" />
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
                HOW WE OPERATE
              </h2>
              <p className=" text-lg sm:text-base lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor ipsum, feugiat at mi eget, varius vulputate nisi. Cras
                commodo nulla et dui tincidunt, ut mattis augue aliquam.
                Phasellus lorem lacus, laoreet sed lacinia non, eleifend eu
                ligula. Sed sodales eros non purus placerat, nec imperdiet
                tellus commodo. In hac habitasse platea dictumst. Aliquam
                aliquam sit amet ante eget iaculis. Phasellus suscipit pulvinar
                justo luctus accumsan. Sed consequat sodales ante.
              </p>
            </div>
          </div>
        </div>
        <div />
        <div />
        <div className=" col-span-2 flex flex-row py-[50px] border-b-4 border-secondary sm:border-white">
          <div className="px-[20px] sm:px-[50px] lg:px-[100px]">
            <div className="flex flex-col ">
              <h2 className=" text-4xl font-bold text-primary text-center mb-[20px]">
                HOW WE OPERATE
              </h2>
              <p className=" text-lg sm:text-base lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor ipsum, feugiat at mi eget, varius vulputate nisi. Cras
                commodo nulla et dui tincidunt, ut mattis augue aliquam.
                Phasellus lorem lacus, laoreet sed lacinia non, eleifend eu
                ligula. Sed sodales eros non purus placerat, nec imperdiet
                tellus commodo. In hac habitasse platea dictumst. Aliquam
                aliquam sit amet ante eget iaculis. Phasellus suscipit pulvinar
                justo luctus accumsan. Sed consequat sodales ante.
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
          <div className="px-[20px] sm:px-[50px] lg:px-[100px]">
            <div className="flex flex-col ">
              <h2 className=" text-4xl font-bold text-primary text-center mb-[20px] ">
                HOW WE OPERATE
              </h2>
              <p className=" text-lg sm:text-base lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor ipsum, feugiat at mi eget, varius vulputate nisi. Cras
                commodo nulla et dui tincidunt, ut mattis augue aliquam.
                Phasellus lorem lacus, laoreet sed lacinia non, eleifend eu
                ligula. Sed sodales eros non purus placerat, nec imperdiet
                tellus commodo. In hac habitasse platea dictumst. Aliquam
                aliquam sit amet ante eget iaculis. Phasellus suscipit pulvinar
                justo luctus accumsan. Sed consequat sodales ante.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center  bg-primary py-[20px]  ">
        <div className="mb-[20px]">
          <p className="text-white text-3xl pb-[20px]">NEED TO GET IN TOUCH?</p>
        </div>
        <div className="flex flex-row justify-around bg-secondary rounded-md object-bottom w-[150px] mx-auto place-content-center hover:bg-white">
          <Link href="/contact-us">
            <a className="flex items-end h-full">
              <div className="flex flex-row justify-end">
                <div className="bg-secondary w-[100px]">
                  <p className="font-parkson text-2xl text-white text-center">
                    CONTACT US
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
