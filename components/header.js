import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="h-[87px] w-full flex flex-row border-b-8 border-secondary">
        <div className="absolute left-0 top-0 diagonal h-[85px] w-[180px] sm:w-[205px] bg-secondary"></div>
        <div className="diagonal h-[80px] w-[160px] sm:w-[220px] bg-primary flex flex-col justify-center">
          <div className="h-[60px] w-[130px] ml-4 relative">
            <Image src="/Logo.png" alt="Logo" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="hidden lg:block w-[100%]">
          <div className=" flex flex-row h-full justify-between w-[100%]">
            <div className="flex flex-row justify-around gap-10 pl-10">
              <Link href="/">
                <a className="flex flex-col justify-center">
                  <div className="">
                    <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                      HOME
                    </h2>
                  </div>
                </a>
              </Link>
              {/* <Link href="/job-search">
                <a className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                      JOB SEARCH
                    </h2>
                  </div>
                </a>
              </Link> */}
              <Link href="/about-us">
                <a className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                      ABOUT US
                    </h2>
                  </div>
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                      CONTACT US
                    </h2>
                  </div>
                </a>
              </Link>
              <Link href="/post-vacancy">
                <a className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                      POST VACANCY
                    </h2>
                  </div>
                </a>
              </Link>
            </div>

            <div className="h-full flex flex-col justify-center">
              <div className=" flex flex-row gap-10 ">
                <div className="flex flex-row">
                  <h3 className="mr-2 font-parkson text-xl text-primary pt-[2px]">
                    01772 584880
                  </h3>
                </div>
                <Link href="/upload-cv">
                  <a className="">
                    <div className="flex flex-row gap-2 mr-4 group">
                      <div className="flex flex-col justify-center">
                        <svg
                          width="18"
                          height="24"
                          viewBox="0 0 18 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                        >
                          <path
                            d="M10.5 6.375V0H1.125C0.501562 0 0 0.501562 0 1.125V22.875C0 23.4984 0.501562 24 1.125 24H16.875C17.4984 24 18 23.4984 18 22.875V7.5H11.625C11.0063 7.5 10.5 6.99375 10.5 6.375ZM13.5553 16.5005H10.5V20.2505C10.5 20.6648 10.1644 21.0005 9.75 21.0005H8.25C7.83563 21.0005 7.5 20.6648 7.5 20.2505V16.5005H4.44469C3.77531 16.5005 3.44109 15.69 3.91641 15.218L8.43609 10.732C8.74781 10.4222 9.25125 10.4222 9.56297 10.732L14.0827 15.218C14.5584 15.69 14.2247 16.5005 13.5553 16.5005ZM17.6719 4.92188L13.0828 0.328125C12.8719 0.117188 12.5859 0 12.2859 0H12V6H18V5.71406C18 5.41875 17.8828 5.13281 17.6719 4.92188Z"
                            fill="#37515F"
                            className="group-hover:fill-primary"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-parkson text-2xl text-primary">
                          UPLOAD CV
                        </h3>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:hidden relative">
          <div className="flex flex-coloumn justify-around">
            <Link href="/upload-cv">
              <a className="">
                <div className=" flex flex-coloumn max-w-[500px]">
                  <div className="pl-[4px] pt-[30px]">
                    <svg
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M10.5 6.375V0H1.125C0.501562 0 0 0.501562 0 1.125V22.875C0 23.4984 0.501562 24 1.125 24H16.875C17.4984 24 18 23.4984 18 22.875V7.5H11.625C11.0063 7.5 10.5 6.99375 10.5 6.375ZM13.5553 16.5005H10.5V20.2505C10.5 20.6648 10.1644 21.0005 9.75 21.0005H8.25C7.83563 21.0005 7.5 20.6648 7.5 20.2505V16.5005H4.44469C3.77531 16.5005 3.44109 15.69 3.91641 15.218L8.43609 10.732C8.74781 10.4222 9.25125 10.4222 9.56297 10.732L14.0827 15.218C14.5584 15.69 14.2247 16.5005 13.5553 16.5005ZM17.6719 4.92188L13.0828 0.328125C12.8719 0.117188 12.5859 0 12.2859 0H12V6H18V5.71406C18 5.41875 17.8828 5.13281 17.6719 4.92188Z"
                        fill="#37515F"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm pt-[32px] pl-[10px]">UPLOAD CV</h3>
                </div>
              </a>
            </Link>
            <div onClick={() => setActive(!active)} className="mt-[20px]">
              <svg
                width="59"
                height="50"
                viewBox="0 0 59 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`} w-[35px] h-[35px] my-auto bg-no-repeat bg-center z-20`}
              >
                <path
                  d="M3 3H55.5M3 46.5H55.5H3ZM3 24.75H55.5H3Z"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div
            className={`lg:hidden  ${
              !active ? "hidden" : "block"
            } absolute bg-primary max-w-[300px] w-[100%] z-10 right-0 top-0 shadow-2xl flex flex-col`}
          >
            <div
              onClick={() => setActive(!active)}
              className="mt-[20px]  self-end mr-[30px]"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 54 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
              >
                <path
                  d="M50.3327 51.8334L3.66602 3.16675M50.3327 3.16675L3.66602 51.8334"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  className="fill-white"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="">
                <h2 className="text-center text-white text-xl font-semibold my-[10px]">
                  HOME
                </h2>
              </a>
            </Link>

            <Link href="/about-us">
              <a className="">
                <h2 className="text-center text-white text-xl font-semibold my-[10px]">
                  ABOUT US
                </h2>
              </a>
            </Link>
            <Link href="/contact-us">
              <a className="">
                <h2 className="text-center text-white text-xl font-semibold my-[10px] ">
                  CONTACT US
                </h2>
              </a>
            </Link>
            <Link href="/post-vacancy">
              <a className="">
                <h2 className="text-center text-white text-xl font-semibold my-[10px] pb-[40px]">
                  POST VACANCY
                </h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
