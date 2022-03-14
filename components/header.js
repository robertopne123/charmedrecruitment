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
            <Image
              src="/Logo.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="hidden lg:block w-[100%]">
          <div className=" flex flex-row h-full justify-between w-[100%]">
            <div className="flex flex-row justify-around gap-10 pl-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                  HOME
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                  JOB SEARCH
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                  ABOUT US
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                  CONTACT US
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-parkson font-bold text-2xl hover:text-secondary">
                  POST VACANCY
                </h2>
              </div>
            </div>

            <div className="h-full flex flex-col justify-center">
              <div className=" flex flex-row gap-10 ">
                <div className="flex flex-row">
                  <h3 className="mr-2 font-parkson text-xl text-primary">
                    01772 584880
                  </h3>
                  <div className="h-[30px] px-[1px] w-0 bg-primary"></div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-row gap-2">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rounded-full ml-2"
                      >
                        <path d="M0 0H27V27H0V0Z" fill="#012169" />
                        <path
                          d="M3.16406 0L13.4578 10.1812L23.7094 0H27V3.4875L16.875 13.5562L27 23.5687V27H23.625L13.5 16.9312L3.41719 27H0V23.625L10.0828 13.6125L0 3.6V0H3.16406Z"
                          fill="white"
                        />
                        <path
                          d="M17.8875 15.8062L27 24.75V27L15.5672 15.8062H17.8875ZM10.125 16.9312L10.3781 18.9L2.27813 27H0L10.125 16.9312ZM27 0V0.16875L16.4953 10.7437L16.5797 8.26875L24.8906 0H27ZM0 0L10.0828 9.9H7.55156L0 2.3625V0Z"
                          fill="#C8102E"
                        />
                        <path
                          d="M10.1672 0V27H16.9172V0H10.1672ZM0 9V18H27V9H0Z"
                          fill="white"
                        />
                        <path
                          d="M0 10.8562V16.2563H27V10.8562H0ZM11.5172 0V27H15.5672V0H11.5172Z"
                          fill="#C8102E"
                        />
                      </svg>
                      <p className="font-parkson text-xl font-primary text-primary">
                        ENG
                      </p>
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:hidden relative">
          <div className="flex flex-coloumn justify-around">
            <a href="mailto:hello@charmedrecruitment.co.uk" />
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
            <h2 className="text-center text-white text-xl font-semibold my-[10px]">
              HOME
            </h2>
            <h2 className="text-center text-white text-xl font-semibold my-[10px]">
              Job Search
            </h2>
            <h2 className="text-center text-white text-xl font-semibold my-[10px]">
              About Us
            </h2>

            <h2 className="text-center text-white text-xl font-semibold my-[10px] pb-[40px]">
              HOME
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
